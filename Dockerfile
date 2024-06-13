FROM node:16

WORKDIR /app

COPY ../package*.json ./

RUN npm install express
RUN npm install mongoose


COPY . .

EXPOSE 5079

CMD [ "node", "product_catalog.js" ]
