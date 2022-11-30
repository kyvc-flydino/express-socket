const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const auth = require('../middlewares/auth')

router
    .get('/', auth.decode, userController.getAll)
    .get('/middleware-login', auth.encode,
        (req, res) => {
        return res
            .status(200)
            .json({
                success: true,
                token: req.token
            })
        }
    )
    .get('/:id', auth.decode, userController.getById)
    .post('/', auth.decode, userController.createUser)
    .put('/:id', auth.decode, userController.updateUser)
    .delete('/:id', auth.decode, userController.deleteUser)

module.exports = router
