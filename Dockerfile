# Use official Node.js image from Docker Hub
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the application port
EXPOSE 3200

# Define environment variables for Redis
#ENV REDIS_HOST=redis
#ENV REDIS_PORT=6379

# Define the command to run your app
CMD ["npm", "start"] 

