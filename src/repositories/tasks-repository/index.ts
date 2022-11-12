import { QueryResult } from "pg";
import { connection } from "../../config/database.js"

async function findManyTasks(): Promise<QueryResult<any>>{

    const allTasks = await connection.query(`

        SELECT 
        tasks.id,
        students.name AS "name",
        tasks.name AS "task",
        tasks.description,
        tasks.status
        FROM tasks
        JOIN students
        ON tasks."studentId" = students.id;
        
    `); 

    return(allTasks.rows[0]);
} 


export { findManyTasks };