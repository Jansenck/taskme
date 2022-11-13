import { Request, Response } from "express";
import { QueryResult } from "pg";
import { StatusCodes } from "http-status-codes";
import { Student } from "../protocols/students-protocol.js";

import { 
    findManyStudents,
    insertOneStudent 
} from "../repositories/students-repository/index.js"

async function lisStudents(_req: Request, res: Response): Promise<Response<string, Record<string, Student>>>{

    try {
        const students: QueryResult<Student> = await findManyStudents();
        return res.status(StatusCodes.OK).send(students);
        
    } catch (error) {
        console.error(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function addStudent(req: Request, res: Response): Promise<Response<string, Record<string, Student>>>{

    const student = req.body;

    if(!student) return res.sendStatus(StatusCodes.BAD_REQUEST);

    try {

        await insertOneStudent(student);
        return res.sendStatus(StatusCodes.CREATED); 
        
    } catch (error) {
        console.error(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


export { 
    lisStudents,
    addStudent
};