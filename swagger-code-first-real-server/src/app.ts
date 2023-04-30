import path from 'path'
import express, { type NextFunction, type Request, type Response } from 'express'
import taskRouter from './routers/task.router'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { middleware } from 'express-openapi-validator'
import morgan from 'morgan'
import { type ValidationError, type OpenAPIV3 } from 'express-openapi-validator/dist/framework/types'
import openapiDefinition from './openapi.definition.json'

const app = express()

const options = {
  definition: openapiDefinition,
  apis: [
    path.join(__dirname, 'routers', '*.router.?s'),
    path.join(__dirname, 'models', '*.model.?s')
  ]
}

const apiSpec = swaggerJSDoc(options) as OpenAPIV3.Document

app.use(morgan('common'))
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: false }))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiSpec))
app.use(
  middleware({
    apiSpec,
    validateRequests: true,
    validateResponses: true
  })
)

app.use('/v1/tasks', taskRouter)

app.use((err: ValidationError, req: Request, res: Response, _next: NextFunction): void => {
  res.status(err.status ?? 500).json({
    error: err
  })
})

export default app
