# Minha configuração comum de DevContainer.

# Imagem base da Microsoft para TypeScript.
#
# Nota: Esta imagem pode demorar um pouco para carregar na primeira vez que você
#       abrir o projeto, porque a velocidade de download é lenta do Brasil.
#
# Imagem baseada em Debian.
#
# Leia mais: https://github.com/devcontainers/images/tree/main/src/typescript-node
FROM mcr.microsoft.com/devcontainers/typescript-node

# Instalar fish, minha shell favorita! (Atualizar pacotes, remover cache etc.)
RUN export DEBIAN_FRONTEND=noninteractive \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
    fish \
    && apt-get autoremove -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Non-root.
USER node

# Cria volume do workspace do DevContainer.
#
# Nota: Essa é a pasta onde a raíz do projeto será montada.
#
# Veja: ./devcontainer.json
RUN mkdir -p /home/node/workspace

# Instalar cli do nest.
#
# Nota: npm vem pré-instalado nesta imagem.
RUN npm install -g @nestjs/cli
