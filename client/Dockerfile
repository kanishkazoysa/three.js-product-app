# Use an official Node.js runtime as the base image
FROM node:20.7.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose a port (if needed)
EXPOSE 5173

# Define the command to run your application
CMD [ "npm", "run" , "dev" ]