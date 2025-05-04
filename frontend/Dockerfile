# Use official Node.js image based on Debian (not Alpine, avoids musl issues)
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your project
COPY . .

ENV ROLLUP_BUNDLER="classic"

# Expose the port Vite runs on
EXPOSE 3004

# Run the dev server
CMD ["npm", "run", "dev"]
