# Book Review

## Description

This project is a simple book review API built with NestJS. It allows users to create, read, update, and delete book reviews.

## Requirements

- Node.js (version 18.x, 20.x, or 23.x)
- npm (version 6.x or higher)
- PostgreSQL (version 12 or higher)

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

## Access Points

- GraphQL Playground: `http://localhost:8080/graphql`
- pgAdmin: `http://localhost:5050`
- Swagger API Docs: `http://localhost:8080/docs`

## Setting Up the App Without Docker

1. Ensure you have PostgreSQL installed and running on your machine.
2. Create a new PostgreSQL database:
   ```sql
   CREATE DATABASE mydatabase;
   ```
3. Set up the environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the `DATABASE_URL` in the `.env` file to match your PostgreSQL configuration:
   ```env
   DATABASE_URL="postgresql://<username>:<password>@localhost:5432/mydatabase?schema=public"
   ```
4. Run the database migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run start:dev
   ```

## Troubleshooting

### Common Issues and Solutions for Non-Docker Setups

1. **Error: `ECONNREFUSED` when connecting to PostgreSQL**
   - Ensure PostgreSQL is running and accessible.
   - Verify the `DATABASE_URL` in the `.env` file is correct.

2. **Error: `prisma migrate dev` fails**
   - Ensure the `DATABASE_URL` in the `.env` file is correct.
   - Check if the database exists and is accessible.

3. **Error: `npm install` fails**
   - Ensure you have the correct version of Node.js and npm installed.
   - Delete the `node_modules` directory and run `npm install` again.

4. **Error: `npm run start:dev` fails**
   - Ensure all dependencies are installed correctly.
   - Check the logs for specific error messages and address them accordingly.

---
