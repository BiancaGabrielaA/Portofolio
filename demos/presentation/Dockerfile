# Step 1: Use an official Node.js image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all source code into the container
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Expose the port that the Next.js app will run on
EXPOSE 3003

# Step 8: Define the command to run the Next.js app
CMD ["npm", "start"]
