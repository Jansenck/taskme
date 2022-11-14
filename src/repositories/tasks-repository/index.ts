import { QueryResult } from "pg";
import connection from "../../config/database.js"
import { Task, NewTask } from "../../protocols/tasks-protocol.js";

async function findManyTasks(): Promise<QueryResult<Task>>{

    return (await connection.query(`
        	
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
    `));
} 

async function findPendingTasks(): Promise<QueryResult<Task>>{

    return (await connection.query(`
        	
        SELECT 
        tasks.id,
        students.name AS "name",
        tasks.name AS "task",
        tasks.description,
        tasks.status AS "status"
        FROM tasks
        JOIN students
        ON tasks."studentId" = students.id
        WHERE status = false
        ORDER BY tasks.id ASC;
    `));
} 

async function insertOneTask(task: object, studentId: string): Promise<QueryResult<NewTask>>{

    const newTask = task as NewTask;
    const { name, description } = newTask;

    return await connection.query(`

        INSERT INTO "tasks" 
        (name, description, "studentId")
        VALUES ($1, $2, $3);`,
        [name, description, studentId]
    );
}

function deleteOneTask(taskId: string): void{

    connection.query(`
        DELETE FROM tasks WHERE id=$1;`,[taskId]
    );
}

async function updateOneTask(task:object , taskId: string): Promise<QueryResult<NewTask>>{

    const newTask = task as NewTask;
    const { name, description, status } = newTask;

    const selectedTask: QueryResult = await connection.query(`
        SELECT * FROM tasks WHERE id=$1;`,
        [taskId]
    );

    const taskDataExists: {
        dataName: boolean,
        dataDescription: boolean,
        DataStatus: boolean
    } = {
        dataName: name !== undefined,
        dataDescription: description !== undefined,
        DataStatus: status !== undefined
    };

    const { dataName, dataDescription, DataStatus } = taskDataExists;

    return await connection.query(`
    
        UPDATE tasks SET 
            name = $1,
            description = $2,
            status = $3
            WHERE id = $4;`,
        [
            dataName? name : selectedTask.rows[0].name, 
            dataDescription? description : selectedTask.rows[0].description, 
            DataStatus? status : selectedTask.rows[0].status, 
            taskId
        ]
    ); 
}

export { 
    findManyTasks, 
    findPendingTasks,
    insertOneTask, 
    deleteOneTask, 
    updateOneTask 
};