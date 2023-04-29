import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import taskRouter from './routers/task.router'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import morgan from 'morgan'

const app = express()

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Code First REST API for managing tasks',
      version: '1.0.0'
    },
    schemes: ['http'],
    servers: [{ url: 'http://localhost:3001/' }]
  },
  apis: [
    path.join(__dirname, 'routers', '*.router.?s'),
    path.join(__dirname, 'models', '*.model.?s')
  ]
}

const swaggerSpec = swaggerJSDoc(options)

app.use(morgan('common'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(bodyParser.json())
app.use('/v1/tasks', taskRouter)

app.listen(3001)
