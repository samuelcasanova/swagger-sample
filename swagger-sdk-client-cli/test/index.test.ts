import TaskService from '../src/services/task.service'

const taskService = new TaskService()

it('should get all mock tasks', async () => {
  const tasks = await taskService.getTasks()

  expect(tasks).toHaveLength(2)
  expect(tasks[0].id).toBeDefined()
  expect(tasks[0].description).toBeDefined()
  expect(tasks[0].createdDate).toBeDefined()
  expect(tasks[0].dueDate).toBeDefined()
})

it('should add a new task', async () => {
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000)

  await expect(taskService.addTask('go shopping', tomorrow)).resolves.toBeUndefined()
})

it('should remove a task', async () => {
  const allTasks = await taskService.getTasks()
  const taskToDelete = allTasks[0]

  await expect(taskService.deleteTask(taskToDelete.id)).resolves.toBeUndefined()
})
