# Book Review

## Description

This project is a simple book review API built with NestJS. It allows users to create, read, update, and delete book reviews.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Phastboy/graphql-practice.git
   ```
2. Navigate to the project directory:
   ```bash
   cd graphql-practice
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run start:dev
   ```
2. The API will be available at `http://localhost:8080`.

## Docker Setup

1. Ensure you have Docker and Docker Compose installed on your machine.
2. Start the Docker containers:
   ```bash
   docker-compose up -d
   ```
3. The PostgreSQL database will be available at `localhost:5432`.
4. Access pgAdmin at `http://localhost:5050` with the default email `admin@admin.com` and password `admin`.
5. The PostgreSQL data will persist across container restarts due to the volume configuration.

## Building and Running the Application Docker Container

1. Build the Docker image for the application:
   ```bash
   docker build -t book-review-app .
   ```
2. Run the Docker container for the application:
   ```bash
   docker run -d -p 8080:8080 --name book-review-app book-review-app
   ```

## Updated Usage with Docker

1. Start the Docker containers:
   ```bash
   docker-compose up -d
   ```
2. The API will be available at `http://localhost:8080`.
3. The PostgreSQL database will be available at `localhost:5432`.
4. Access pgAdmin at `http://localhost:5050` with the default email `admin@admin.com` and password `admin`.
5. The PostgreSQL data will persist across container restarts due to the volume configuration.

## Using the GitHub Action to Build the App Image

1. Ensure you have a Docker registry account (e.g., Docker Hub).
2. Update the GitHub repository secrets with your Docker registry credentials:
   - `DOCKER_USERNAME`: Your Docker registry username.
   - `DOCKER_PASSWORD`: Your Docker registry password.
3. The GitHub action will automatically build and push the Docker image to the registry on every push to the `main` branch and on every pull request to the `main` branch.
4. You can find the built image in your Docker registry account.
