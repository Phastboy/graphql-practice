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

## Project Dependencies

The project dependencies listed in `package.json` are as follows:

### Dependencies

- `@apollo/server`: Apollo Server for GraphQL.
- `@nestjs/apollo`: Integration of Apollo Server with NestJS.
- `@nestjs/common`: Common utilities and decorators for NestJS.
- `@nestjs/core`: Core functionality of NestJS.
- `@nestjs/graphql`: GraphQL module for NestJS.
- `@nestjs/mapped-types`: Utility for creating mapped types in NestJS.
- `@nestjs/platform-express`: Express platform adapter for NestJS.
- `@nestjs/swagger`: Swagger module for NestJS.
- `@prisma/client`: Prisma Client for database access.
- `graphql`: GraphQL library.
- `reflect-metadata`: Metadata reflection API.
- `rxjs`: Reactive Extensions for JavaScript.

### DevDependencies

- `@eslint/eslintrc`: ESLint configuration.
- `@eslint/js`: ESLint JavaScript plugin.
- `@nestjs/cli`: NestJS CLI.
- `@nestjs/schematics`: NestJS schematics.
- `@nestjs/testing`: Testing utilities for NestJS.
- `@swc/cli`: SWC CLI.
- `@swc/core`: SWC core.
- `@types/express`: TypeScript definitions for Express.
- `@types/jest`: TypeScript definitions for Jest.
- `@types/node`: TypeScript definitions for Node.js.
- `@types/supertest`: TypeScript definitions for Supertest.
- `eslint`: ESLint.
- `eslint-config-prettier`: Prettier configuration for ESLint.
- `eslint-plugin-prettier`: Prettier plugin for ESLint.
- `globals`: Global variables for ESLint.
- `jest`: JavaScript testing framework.
- `prettier`: Code formatter.
- `prisma`: Prisma CLI.
- `source-map-support`: Source map support for Node.js.
- `supertest`: HTTP assertions for testing.
- `ts-jest`: TypeScript preprocessor for Jest.
- `ts-loader`: TypeScript loader for Webpack.
- `ts-node`: TypeScript execution environment for Node.js.
- `tsconfig-paths`: TypeScript path mapping.
- `typescript`: TypeScript compiler.
- `typescript-eslint`: TypeScript plugin for ESLint.
