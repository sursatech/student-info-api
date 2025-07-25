# Student Info API

A minimal CRUD REST API for managing student information, built with Bun, TypeScript, Express, Prisma, and PostgreSQL.

## Features
- Create, read, update, and delete students
- Minimal, clean codebase
- No authentication (for testing/demo purposes)

## Getting Started

### 1. Clone and Install
```sh
git clone <your-repo-url>
cd student-info-backend
bun install
```

### 2. Configure Database
- Copy `.env.example` to `.env` and update with your PostgreSQL credentials.

### 3. Prisma Migration
```sh
npx prisma migrate dev --name init
```

### 4. Start the Server
```sh
bun run src/index.ts
```

Server runs at [http://localhost:3000](http://localhost:3000)

## API Endpoints
- `POST   /students`      – Create student
- `GET    /students`      – List all students
- `GET    /students/:id`  – Get student by ID
- `PUT    /students/:id`  – Update student by ID
- `DELETE /students/:id`  – Delete student by ID

## Testing
- Use the provided `StudentInfoAPI.postman_collection.json` in Postman to test all endpoints.

---

**Happy coding with Bun!** 