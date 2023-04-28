import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import taskRouter from './routers/task.router'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
const app = express()

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Code First Real REST API for managing tasks',
      version: '1.0.0'
    },
    schemes: ['http'],
    servers: [{ url: 'http://localhost:3001/' }]
  },
  apis: [
    path.join(__dirname, 'src', 'routers', 'task.router.ts'),
    path.join(__dirname, 'dist', 'src', 'routers', 'task.router.js')
  ]
}

const swaggerSpec = swaggerJSDoc(options)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(bodyParser.json())
app.use(taskRouter)

app.listen(3001)
