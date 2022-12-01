const express = require('express')
// controllers
const userController = require('../controllers/user')

const router = express.Router()

router
    .get('/', userController.onGetAllUsers)
    .post('/', userController.onCreateUser)
    .get('/:id', userController.onGetUserById)
    .delete('/:id', userController.onDeleteUserById)

module.exports = router
