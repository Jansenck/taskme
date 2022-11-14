export type NewTask = Partial<Task>

export type Task = {
    id: number,
    name: string,
    task: string,
    description: string,
    status: boolean
}