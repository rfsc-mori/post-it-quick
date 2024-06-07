FROM node:22-slim@sha256:840079c08ec485123cf7ea506a13afea630db25606f71e6140cf8dbdf9bba552 as base
RUN export DEBIAN_FRONTEND=noninteractive \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
    openssl \
    && apt-get autoremove -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN useradd -m postitquick

USER postitquick

WORKDIR /usr/src/postitquick

FROM base AS package
COPY package.json package-lock.json ./
COPY tsconfig.json tsconfig.build.json ./
COPY nest-cli.json ./

FROM package AS build-dependencies
RUN npm ci

FROM build-dependencies AS source
COPY src src

FROM source AS build
RUN npm run build

FROM build-dependencies AS production
RUN npm ci --omit=dev

FROM production AS dependencies
COPY prisma prisma
COPY docker-entrypoint.sh docker-entrypoint.sh

FROM base AS release
WORKDIR /usr/local/postitquick
COPY --from=dependencies /usr/src/postitquick/node_modules node_modules
COPY --from=build /usr/src/postitquick/dist dist

COPY --from=build /usr/src/postitquick/package.json package.json

COPY --from=dependencies /usr/src/postitquick/prisma ./

COPY --from=dependencies /usr/src/postitquick/docker-entrypoint.sh docker-entrypoint.sh
COPY --from=build /usr/src/postitquick/docker-entrypoint.sh docker-entrypoint.sh

USER root

RUN chmod +x docker-entrypoint.sh

USER postitquick

FROM release as postitquick
ENV NODE_ENV=production
EXPOSE 3000/tcp

RUN npx prisma generate

ENTRYPOINT [ "./docker-entrypoint.sh" ]
