# GraphQl

## Project Overview
This project is a practice implementation of GraphQL using NestJS. It includes features such as creating, updating, and removing books, as well as querying for books and individual book details.

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
2. Open your browser and navigate to `http://localhost:3000/graphql` to access the GraphQL playground.

## GraphQL Operations
1. Query: `books` - Retrieves a list of all books.
   ```graphql
   query {
     books {
       id
       title
       author
       rating
     }
   }
   ```
2. Query: `book(id: ID!)` - Retrieves a single book by its ID.
   ```graphql
   query {
     book(id: "1") {
       id
       title
       author
       rating
     }
   }
   ```
3. Mutation: `createBook(createBookInput: CreateBookInput!)` - Creates a new book.
   ```graphql
   mutation {
     createBook(createBookInput: { title: "New Book", author: "Author Name", rating: 5 }) {
       id
       title
       author
       rating
     }
   }
   ```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
