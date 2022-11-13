import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { findManyStudents } from "../repositories/students-repository/index.js"

async function lisStudents(_req: Request, res: Response){

    try {
        const tasks = await findManyStudents();
        return res.status(StatusCodes.OK).send(tasks);
        
    } catch (error) {
        console.error(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export { 
    lisStudents,
};