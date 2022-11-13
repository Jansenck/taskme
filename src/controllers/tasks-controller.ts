import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { findManyTasks, insertOneTask } from "../repositories/tasks-repository/index.js";

async function listTasks(_req: Request, res: Response){

    try {
        const tasks = await findManyTasks();
        return res.status(StatusCodes.OK).send(tasks);
        
    } catch (error) {
        console.error(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function addTask(req: Request, res: Response){

    const task = req.body;
    const { studentId } = req.params;

    if(!task || !studentId) return res.sendStatus(StatusCodes.BAD_REQUEST);

    try {

        await insertOneTask(task, studentId);
        return res.sendStatus(StatusCodes.CREATED); 
        
    } catch (error) {
        console.error(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export { listTasks, addTask };