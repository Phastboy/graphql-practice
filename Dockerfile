# Use the node:14 image as the base image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents to /app
COPY . /app

# Copy the .env file to the Docker image
COPY .env /app/.env

# Copy the prisma/schema.prisma file to the Docker image
COPY prisma/schema.prisma /app/prisma/schema.prisma

# Install dependencies and generate Prisma client
RUN npm install && npx prisma generate

# Expose port 8080
EXPOSE 8080

# Run the application
CMD ["npm", "run", "start:dev"]
