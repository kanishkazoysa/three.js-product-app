# Use the official Node.js 20.7.0 image as the base image
FROM node:20.7.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your application listens on
EXPOSE 8080

# Start the application
CMD [ "npm", "start" ]