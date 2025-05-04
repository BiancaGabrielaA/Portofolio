# Step 1: Build the React app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the React app using Nginx
FROM nginx:alpine

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
