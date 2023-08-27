FROM node:20-bookworm

WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm ci

COPY send.js /app
COPY .env /app

ENTRYPOINT ["node", "/app/send.js"]
