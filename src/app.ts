import express, {json} from "express";
import cors from "cors";

import { 
    listTasks, 
    addTask, 
    deleteTask,
    updateTask 
} from "./controllers/tasks-controller.js";

import { 
    lisStudents,
    addStudent
 } from "./controllers/students-controller.js";

const app = express();

app
    .use(cors())
    .use(json())
    .get("/students", lisStudents)
    .post("/students", addStudent)
    .post("/task/:studentId", addTask)
    .get("/tasks", listTasks)
    .delete("/tasks/:taskId", deleteTask)
    .put("/tasks/:taskId", updateTask);

export default app;