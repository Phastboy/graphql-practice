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
