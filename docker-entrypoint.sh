#!/bin/sh

./wait-for-it.sh db:5432 --timeout=10 --strict

npx prisma migrate deploy

npm run start:prod
