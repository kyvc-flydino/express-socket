var UserModel = require('../models/User')

exports.onGetAllUsers = function (req, res) {
    try {
        UserModel.getUsers(function(data) {
            res.send({
                status: 200,
                success: true,
                data: data
            })
        })
    } catch (error) {
        res.send({
            status: 500,
            success: false,
            error: error
        })
    }
}

exports.onGetUserById = function (req, res) {
    try {
        UserModel.getUserById(req.params.id, function(data) {
            res.send({
                status: 200,
                success: true,
                data: data
            })
        })
    } catch (error) {
        res.send({
            status: 500,
            success: false,
            error: error
        })
    }
}

exports.onCreateUser = function (req, res) {
    try {
        var data = req.body

        UserModel.createUser(data, function(result){
            res.send({
                status: 400,
                success: true,
                data: result
            })
        })
    } catch (error) {
        res.send({
            status: 500,
            success: false,
            error: error
        })
    }    
}

exports.onDeleteUserById = function (req, res) {
    try {
        var id = req.params.id

        UserModel.deleteUserById(id, function(result){
            res.send({
                status: 200,
                success: true,
                data: result
            })
        })
    } catch (error) {
        res.send({
            status: 500,
            success: false,
            error: error
        })
    }
}
