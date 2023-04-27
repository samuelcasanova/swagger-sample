import supertest from 'supertest'
import app from '../../src/app'

const request = supertest(app)
const newTask = {
  id: '43e661dd-e924-43d8-957a-2f0592691b42',
  description: 'Test',
  createdDate: new Date('2016-08-29T09:12:33.001Z'),
  dueDate: new Date('2017-08-29T09:12:33.001Z')
}

it('should get all tasks', async () => {
  const response = await request.get('/v1/tasks')

  expect(response.status).toBe(200)
  expect(response.body).toHaveLength(3)
  expect(response.header['content-type']).toMatch(/application\/json/)
})

it('should add a new task and return 201', async () => {
  const response = await request.post('/v1/tasks').send(newTask)

  expect(response.status).toBe(201)
})

it('should delete the task created and return 204', async () => {
  const response = await request.delete(`/v1/tasks/${newTask.id}`)

  expect(response.status).toBe(204)
})
