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
 } from "./controllers/students-controller.js";

const app = express();

app
    .use(cors())
    .use(json())
    .get("/students", lisStudents)
    .post("/task/:studentId", addTask)
    .get("/tasks", listTasks)
    .delete("/tasks/:taskId", deleteTask)
    .put("/tasks/:taskId", updateTask);

export default app;