import type { Request, Response } from 'express'
import { taskService } from '../services/tasks.service'

export const getTasks = (req: Request, res: Response): void => {
  const tasks = taskService.getTasks()
  res.json(tasks)
}

export const postTask = (req: Request, res: Response): void => {
  taskService.addTask(req.body)
  res.status(201)
}

export const deleteTask = (req: Request, res: Response): void => {
  taskService.deleteTask(req.params.taskId)
  res.status(204)
}
