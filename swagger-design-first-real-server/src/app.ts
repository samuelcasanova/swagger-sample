import path from 'path'
import express, { type NextFunction, type Request, type Response } from 'express'
import { middleware } from 'express-openapi-validator'
import morgan from 'morgan'

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

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  res.status(500).json({
    error: err
  })
})

export default app
