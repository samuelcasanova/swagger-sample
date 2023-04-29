import { Task } from '../models/task.model'

export class TaskService {
  protected tasks = [
    new Task('b9cacb29-1631-400b-9efd-91eeb474b23c', 'Laundry', new Date('2022-08-29T09:12:33.001Z'), new Date('2023-08-29T09:12:33.001Z')),
    new Task('13148f5d-2b53-40c1-a3e7-6470102602cd', 'Shop', new Date('2022-05-12T09:12:33.001Z'), new Date('2023-06-23T09:12:33.001Z')),
    new Task('7a06267d-b865-40d7-adfe-52b3799bade5', 'Gardening', new Date('2022-09-21T09:12:33.001Z'), new Date('2023-11-28T09:12:33.001Z'))
  ]

  getTasks (): Task[] {
    return this.tasks
  }

  addTask (task: Task): void {
    this.tasks.push(task)
  }

  deleteTask (taskId: string): void {
    this.tasks = this.tasks.filter(t => t.id !== taskId)
  }
}
