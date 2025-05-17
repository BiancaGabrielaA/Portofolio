# Step 1: Use an official Node.js image
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

<<<<<<< HEAD
EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

CMD ["npm", "start"]
=======
RUN npm run export

EXPOSE 3003
>>>>>>> refs/remotes/origin/main

