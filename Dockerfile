# Use the node:14 image as the base image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents to /app
COPY . /app

# Install dependencies and generate Prisma client
RUN npm install && npx prisma generate

# Expose port 8080
EXPOSE 8080

# Run the application
CMD ["npm", "run", "start:dev"]
