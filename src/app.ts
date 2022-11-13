import express, {json} from "express";
import { listTasks, addTask } from "./controllers/tasks-controller.js";
import cors from "cors";

const app = express();

app
    .use(cors())
    .use(json())
    .post("/task/:studentId", addTask)
    .get("/tasks", listTasks);

export default app;