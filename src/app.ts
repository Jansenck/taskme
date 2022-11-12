import express, {json} from "express";
import { listTasks } from "./controllers/tasks-controller.js";
import cors from "cors";

const app = express();

app
    .use(cors())
    .use(json())
    .get("/tasks", listTasks);

export default app;