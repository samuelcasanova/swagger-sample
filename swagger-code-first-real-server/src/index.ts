import http from 'http'
import app from './app'

http.createServer(app).listen(3001)
