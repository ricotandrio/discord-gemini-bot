FROM node:18.16.1 AS build

WORKDIR /app

COPY . .

RUN npm install

FROM node:18.16.1-slim

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD ["node", "/app/src/main.mjs"]