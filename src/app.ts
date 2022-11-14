import express, {json} from "express";
import { Express } from "express";
import cors from "cors";

import { 
    listTasks, 
    listPendingTasks,
    addTask, 
    deleteTask,
    updateTask 
} from "./controllers/tasks-controller.js";

import { 
    lisStudents,
    addStudent,
    deleteStudent
 } from "./controllers/students-controller.js";

const app: Express = express();

app
    .use(cors())
    .use(json())
    .post("/students", addStudent)
    .get("/students", lisStudents)
    .delete("/students/:studentId", deleteStudent)
    .post("/task/:studentId", addTask)
    .get("/tasks", listTasks)
    .get("/tasks/pending", listPendingTasks)
    .delete("/tasks/:taskId", deleteTask)
    .put("/tasks/:taskId", updateTask);

export default app;