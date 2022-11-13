import { QueryResult } from "pg";
import { connection } from "../../config/database.js"
import { Task } from "../../protocols/tasks-protocol.js";

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
        ON tasks."studentId" = students.id
        ORDER BY tasks.id ASC;
    `); 

    return(allTasks.rows);
} 

async function insertOneTask(task: object, studentId: string): Promise<QueryResult<any>>{

    const newTask = task as Task;
    const { name, description } = newTask;

    await connection.query(`

        INSERT INTO "tasks" 
        (name, description, "studentId")
        VALUES ($1, $2, $3);`,
        [name, description, studentId]
    );
}


export { findManyTasks, insertOneTask };