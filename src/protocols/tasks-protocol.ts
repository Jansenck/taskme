export type NewTask = Omit<Task, "id">

export type Task = {
    id: number,
    name: string,
    task: string,
    description: string,
    status: boolean
}