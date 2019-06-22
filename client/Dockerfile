FROM node:10.12.0-alpine

COPY ./ /app

WORKDIR /app

RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "dev" ]