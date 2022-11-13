import { QueryResult } from "pg";
import { connection } from "../../config/database.js"
import { Student } from "../../protocols/students-protocol.js";

async function findManyStudents(): Promise<QueryResult<Student>>{

    const allStudents = await connection.query(`
        	
        SELECT * FROM students ORDER BY students.id ASC;
    `); 

    return(allStudents.rows);
} 

export { 
    findManyStudents, 
};