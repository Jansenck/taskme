import { Request, Response } from "express";
import { QueryResult } from "pg";
import { StatusCodes } from "http-status-codes";
import { Student } from "../protocols/students-protocol.js";

import { 
    findManyStudents,
    insertOneStudent,
    deleteOneStudent 
} from "../repositories/students-repository/index.js"

async function lisStudents(_req: Request, res: Response): Promise<Response<string, Record<string, Student>>>{

    try {
        const students: QueryResult<Student> = await findManyStudents();
        return res.status(StatusCodes.OK).send(students.rows);
        
    } catch (error) {
        console.error(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function addStudent(req: Request, res: Response): Promise<Response<string, Record<string, Student>>>{

    const student: Student = req.body;

    if(!student) return res.sendStatus(StatusCodes.BAD_REQUEST);

    try {

        await insertOneStudent(student);
        return res.sendStatus(StatusCodes.CREATED); 
        
    } catch (error) {
        console.error(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteStudent(req: Request, res: Response): Promise<Response<string, Record<string, Student>>>{

    const { studentId } = req.params;

    if(!studentId) return res.sendStatus(StatusCodes.BAD_REQUEST);

    try {

        await deleteOneStudent(studentId);
        return res.sendStatus(StatusCodes.OK); 
        
    } catch (error) {
        console.error(error.message);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export { 
    lisStudents,
    addStudent,
    deleteStudent
};