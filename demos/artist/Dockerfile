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

# Stage 2: Serve the app
FROM node:18-alpine
WORKDIR /app

# Copy built files from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

# Serve using vite preview
EXPOSE 3002
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3002"]
