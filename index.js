const http = require('http')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const socketio = require('socket.io')
const app = express()
const port = 3000

//List of all available routers
const userRouter = require('./routes/user')

const server = http.createServer(app)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user', userRouter)

server.listen(port)

server.on('listening', () => {
    console.log('Listening on port', port)
})
