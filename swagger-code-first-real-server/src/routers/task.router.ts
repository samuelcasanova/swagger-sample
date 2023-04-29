import { type Request, type Response, Router } from 'express'
import { TaskService } from '../services/task.service'
import { type Task } from '../models/task.model'

const taskRouter = Router()
const taskService = new TaskService()

/**
 * @swagger
 *   /tasks:
 *     get:
 *       tags:
 *       - users
 *       summary: get tasks
 *       description: |
 *         Gets all tasks
 *       parameters:
 *       - name: skip
 *         in: query
 *         description: number of records to skip for pagination
 *         required: false
 *         style: form
 *         explode: true
 *         schema:
 *           minimum: 0
 *           type: integer
 *           format: int32
 *       - name: limit
 *         in: query
 *         description: maximum number of records to return
 *         required: false
 *         style: form
 *         explode: true
 *         schema:
 *           maximum: 50
 *           minimum: 0
 *           type: integer
 *           format: int32
 *       responses:
 *         "200":
 *           description: tasks results
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Task'
 *                 x-content-type: application/json
 *         "400":
 *           description: bad input parameter
 */
taskRouter.get('/', (req: Request, res: Response) => {
  const tasks = taskService.getTasks()
  res.send(tasks)
})

/**
 * @swagger
 *   /tasks:
 *      post:
 *        tags:
 *        - admins
 *        summary: adds a new task
 *        description: Adds a new task
 *        operationId: postTask
 *        requestBody:
 *          description: Task to add
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Task'
 *        responses:
 *          "201":
 *            description: task created successfully
 *          "400":
 *            description: invalid request
 */
taskRouter.post('/', (req: Request, res: Response) => {
  const task = req.body as Task
  taskService.addTask(task)
  res.status(201).send()
})

/**
 * @swagger
 *   /tasks:
 *      delete:
 *            tags:
 *            - admins
 *            summary: deletes an existing task
 *            description: Deletes an existing task
 *            operationId: deleteTask
 *            parameters:
 *            - name: taskId
 *              in: path
 *              description: Task id to delete
 *              required: true
 *              style: simple
 *              explode: false
 *              schema:
 *                type: string
 *            responses:
 *              "200":
 *                description: task deleted
 *              "404":
 *                description: task not found
 */
taskRouter.delete('/:taskId', (req: Request, res: Response) => {
  const taskId = req.params.taskId
  taskService.deleteTask(taskId)
  res.status(204).send()
})

export default taskRouter
