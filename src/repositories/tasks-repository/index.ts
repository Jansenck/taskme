import { QueryResult } from "pg";
import { connection } from "../../config/database.js"
import { Task } from "../../protocols/tasks-protocol.js";

async function findManyTasks(): Promise<QueryResult<Task>>{

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

async function insertOneTask(task: object, studentId: string): Promise<QueryResult<Task>>{

    const newTask = task as Task;
    const { name, description } = newTask;

    await connection.query(`

        INSERT INTO "tasks" 
        (name, description, "studentId")
        VALUES ($1, $2, $3);`,
        [name, description, studentId]
    );
}

async function deleteOneTask(taskId: string): Promise<QueryResult<Task>>{

    await connection.query(`
        DELETE FROM tasks WHERE id=$1;`,[taskId]
    );
}

async function updateOneTask(task:object , taskId: string): Promise<QueryResult<Task>>{

    const newTask = task as Task;
    const { name, description, status } = newTask;

    const selectedTask = await connection.query(`
        SELECT * FROM tasks WHERE id=$1;`,
        [taskId]
    );

    const taskDataExists = {
        dataName: name !== undefined,
        dataDescription: description !== undefined,
        DataStatus: status !== undefined
    };

    const { dataName, dataDescription, DataStatus } = taskDataExists;

    await connection.query(`
    
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
    insertOneTask, 
    deleteOneTask, 
    updateOneTask 
};