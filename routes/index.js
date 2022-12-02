const multer = require('multer');
const upload = multer();

const userRouter = require('../routes/user')
const chatRouter = require('../routes/chat')

module.exports = (app) => {
    app.use('/users', upload.none(), userRouter)
    app.use('/messages', upload.none(), chatRouter)
}
