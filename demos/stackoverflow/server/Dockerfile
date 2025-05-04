# Step 1: Use Node.js as the base image
FROM node:18 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all application files
COPY . .

# Expose the port the app will run on
EXPOSE 5050

# Start the backend server
CMD ["npm", "start"]
