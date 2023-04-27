import http from 'http'
import path from 'path'
import express from 'express'
import { middleware } from 'express-openapi-validator'

const app = express()

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

http.createServer(app).listen(3000)
