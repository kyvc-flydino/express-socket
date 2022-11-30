const jwt = require('jsonwebtoken')
const SECRET_KEY = '123qwe!@#'

const auth = {
    decode: (req, res, next) => {
        if (!req.headers['authorization']) {
            return res.status(401).json({
                success: false,
                message: 'No token provided'
            })
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.decode(token, SECRET_KEY)
            req.information = decoded
            
            return next()
        } catch (error) {
            console.log(error)
            return res
                .status(401)
                .json({
                    success: false,
                    message: 'Invalid auth token'
                })
        }
    },
    encode: (req, res, next) => {
        const payload = {
            userName: req.body.userName,
            password: req.body.password,
        }

        const token = jwt.sign(payload, SECRET_KEY)
        req.token = token
        next()
    }
}

module.exports = auth
