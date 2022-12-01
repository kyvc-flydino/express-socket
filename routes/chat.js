const express = require('express')
// controllers
const chatController = require('../controllers/chat')

const router = express.Router()

router
    .get('/:id', chatController.onGetMessage)
    .post('/', chatController.onSendMessage)

module.exports = router
