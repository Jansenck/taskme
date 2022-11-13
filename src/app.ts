import express, {json} from "express";
import cors from "cors";
import { 
    listTasks, 
    addTask, 
    deleteTask,
    updateTask 
} from "./controllers/tasks-controller.js";

const app = express();

app
    .use(cors())
    .use(json())
    .post("/task/:studentId", addTask)
    .get("/tasks", listTasks)
    .delete("/tasks/:taskId", deleteTask)
    .put("/tasks/:taskId", updateTask);

export default app;