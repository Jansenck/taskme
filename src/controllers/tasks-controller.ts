import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { findManyTasks } from "../repositories/tasks-repository/index.js";

export async function listTasks(_req: Request, res: Response){

    try {
        const tasks = await findManyTasks();
        return res.status(StatusCodes.OK).send(tasks);
        
    } catch (error) {
        console.error(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}