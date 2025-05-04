# Stage 1: Build the app
FROM node:18-alpine as build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Build the Vite app
RUN npm run build

# Debug: List contents of /app and /app/dist
RUN echo "Listing /app:" && ls -al /app
RUN echo "Listing /app/dist:" && ls -al /app/dist

# Serve using vite preview
EXPOSE 3002
CMD ["npm", "run", "preview"]
