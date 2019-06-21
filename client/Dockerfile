FROM node:10.12.0-alpine

WORKDIR /app

COPY ./ /app

RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "dev" ]