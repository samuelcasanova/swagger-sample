import path from 'path'
import express, { type NextFunction, type Request, type Response } from 'express'
import { middleware } from 'express-openapi-validator'
import morgan from 'morgan'
import { type ValidationError } from 'express-openapi-validator/dist/framework/types'

const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: false }))

app.use(
  middleware({
    apiSpec: path.join(__dirname, 'api', 'openapi.yaml'),
    validateRequests: true,
    validateResponses: true,
    operationHandlers: path.join(__dirname)
  })
)

app.use((err: ValidationError, req: Request, res: Response, _next: NextFunction): void => {
  res.status(err.status ?? 500).json({
    error: err
  })
})

export default app
