const makeValidation = require('@withvoid/make-validation')

const userController = {
    getAll: (req, res, next) => {
        return res
            .status(200)
            .json({ success: true, message: 'Job well done' })
    },
    getById: (req, res, next) => {
        const { id } = req.params

        return res
            .status(200)
            .json({ success: true, message: `Job well done ` + id })
    },
    createUser: (req, res, next) => {
        const { email, name, userType } = req.body

        const result = makeValidation(types => {
            return {
                payload: req.body,
                checks: {
                    name: { type: types.string, options: { empty: false }},
                    email: { type: types.string, options: { empty: false }},
                    userType: {
                        type: types.enum,
                        options: {
                            enum: {
                                0: 'master',
                                1: 'member',
                            }
                        }
                    }
                }
            }
        })

        if (!result.success) {
            return res
                .status(400)
                .json({ ...result })
        }

        const userPayload = {
            email,
            name,
            userType,
        }

        return res
           .status(200)
           .json({
                success: true,
                message: 'Job well done',
                data: userPayload
            })
    },
    updateUser: (req, res, next) => {

    },
    deleteUser: (req, res, next) => {

    }
}

module.exports = userController
