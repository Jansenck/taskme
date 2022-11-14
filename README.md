# TASKME

## functionality

- Add a student (user)
- List all students
- Delete a student
- Add a new task
- List all tasks
- List pending tasks
- Delete a task
- Update a task

## Documentation (API)

POST: */students*

```json

  {
    "name": "Pedro"
  }

```

GET: */students*

```json

  [
    {
      "id": 1,
      "name": "Pedro"
    },
    {
      "id": 2,
      "name": "Jansen"
    }
  ]

```

DELETE: */students/:studentId*

GET: */tasks*

```json

  [
    {
      "id": 1,
      "name": "Pedro",
      "task": "read a new book",
      "description": "get some amazing book to read",
      "status": false
    },
    {
      "id": 2,
      "name": "Marcos",
      "task": "gym",
      "description": null,
      "status": false
    },
    {
      "id": 3,
      "name": "Jansen",
      "task": "to code",
      "description": "start a new fullstack project",
      "status": true
    }
  ]

```

GET: */tasks/pending*

```json

  [
    {
      "id": 1,
      "name": "Pedro",
      "task": "read a new book",
      "description": "get some amazing book to read",
      "status": false
    },
    {
      "id": 2,
      "name": "Marcos",
      "task": "gym",
      "description": null,
      "status": false
    }
  ]

```

POST: */task/:studentId*

```json

    {
      "name": "ride a bike",
      "description": "get some mountains"
    }

```

DELETE: */tasks/:taskId*

UPDATE: */tasks/:taskId*

```json

    {
      "name": "ride a bike",
      "description": "get some mountains",
      "status": true
    }

```

## Technologies

- GIT
- GITHUB
- LINUX
- NODE
- TYPESCRIPT
- POSTGRES

## How to use

1- Clone the repository
2- Use the dump.sql as database model to create a database
3- Install all project dependencies

```git
  npm i
```
4 - Config .env file
5 - Start the app

```git
npx nodemon src/server.ts
```

