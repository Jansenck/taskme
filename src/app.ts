import express, {json} from "express";
import { listTasks, addTask, deleteTask } from "./controllers/tasks-controller.js";
import cors from "cors";

const app = express();

app
    .use(cors())
    .use(json())
    .post("/task/:studentId", addTask)
    .get("/tasks", listTasks)
    .delete("/tasks/:taskId", deleteTask);

export default app;