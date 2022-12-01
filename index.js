const http = require('http')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { Server } = require('socket.io')

//Socket configuration
const WebSockets = require('./utils/WebSockets.js')

require('./database/connect.js')

//Routes
const userRouter = require('./routes/user')

const app = express()

const port = process.env.PORT || "3000"
app.set("port", port)

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/users", userRouter)

/** catch 404 and forward to error handler */
app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'API endpoint doesnt exist'
    })
})

/** Create HTTP server. */
const serve = http.createServer(app)
const io = new Server(serve)
/** Create socket connection */
global.io = io.listen(serve)
global.io.on('connection', WebSockets.connection)
/** Listen on provided port, on all network interfaces. */
serve.listen(port)
/** Event listener for HTTP server "listening" event. */
serve.on("listening", () => {
    console.log(`Listening on port:: http://localhost:${port}/`)
})
