import { QueryResult } from "pg";
import connection from "../../config/database.js"
import { Student } from "../../protocols/students-protocol.js";

async function findManyStudents(): Promise<QueryResult<Student>>{

    return (await connection.query(`
        	
        SELECT * FROM students ORDER BY students.id ASC;
    `)); 

} 

function insertOneStudent(student: object): void{

    const newStudent = student as Student;
    const { name } = newStudent;

    connection.query(`

        INSERT INTO "students" (name) VALUES ($1);`,
        [name]
    );
}

function deleteOneStudent(studentId: string): void{

    connection.query(`
        DELETE FROM students WHERE id=$1;`,[studentId]
    );
}

export { 
    findManyStudents, 
    insertOneStudent,
    deleteOneStudent
};