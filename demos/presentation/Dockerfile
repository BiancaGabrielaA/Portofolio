# Step 1: Use an official Node.js image
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm run export

EXPOSE 3003

CMD ["npm", "run", "dev"]
