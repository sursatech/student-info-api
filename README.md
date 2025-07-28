# Student Info API

A REST API for managing student information built with Bun, TypeScript, Express, Prisma, and PostgreSQL.

## Quick Setup

1. **Install dependencies**
   ```bash
   bun install
   ```

2. **Configure database**
   ```bash
   # Create .env file
   DATABASE_URL="postgresql://username:password@localhost:5432/student_info_db"
   ```

3. **Setup database**
   ```bash
   bunx prisma generate
   bunx prisma migrate dev --name init
   ```

4. **Start server**
   ```bash
   bun run dev
   ```

Server runs at `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check |
| `POST` | `/students` | Create student |
| `GET` | `/students` | Get all students |
| `GET` | `/students/:id` | Get student by ID |
| `PUT` | `/students/:id` | Update student |
| `DELETE` | `/students/:id` | Delete student |

## Student Model
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com", 
  "age": 20
}
```

## Testing
Import `StudentInfoAPI.postman_collection.json` into Postman for testing all endpoints.

---
Built with ❤️ using Bun 