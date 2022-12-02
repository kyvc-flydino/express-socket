const http = require('http')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { Server } = require('socket.io')

require('./database/connect.js')

const app = express()

const port = process.env.PORT || "3000"
app.set("port", port)

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const routes = require('./routes/index')
routes(app)

/** catch 404 and forward to error handler */
app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'API endpoint doesnt exist'
    })
})

/** Create HTTP server. */
const serve = http.createServer(app)
const io = new Server(serve).listen(serve)

io.on('connection', socket => {
    console.log('Welcome to server chat')

    socket.on('connection', socket => {
        console.log(message)
        io.emit('message', message)
    })
})

/** Listen on provided port, on all network interfaces. */
serve.listen(port)
/** Event listener for HTTP server "listening" event. */
serve.on("listening", () => {
    console.log(`Listening on port:: http://localhost:${port}/`)
})
