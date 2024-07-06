# Backend

## Description

This is the backend for the task management application. It is built with Node.js and TypeScript, using Express for the server and MongoDB for the database.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/my-task-app.git
cd my-task-app/backend
```

2. Install dependencies:

```bash
npm install
```

3. Compile TypeScript code:

```bash
npm run build
```

4. Start the application:

```bash
npm start
```

## Development

To start the application in development mode with TypeScript:

```bash
npm run dev
```

## TODO

- Implement database connection logic in `src/utils/database.ts`
- Define the schema and model for `Task` in `src/models/task.ts`
- Implement the functions to interact with the database in `src/services/taskService.ts`
- Implement the task creation, retrieval, update, and deletion logic in `src/controllers/taskController.ts`
