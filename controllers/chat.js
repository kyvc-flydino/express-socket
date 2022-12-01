var ChatModel = require('../models/chat')

exports.onGetMessage = function (req, res) {
    try {
        ChatModel.getMessage(req.params.id, function(data) {
            console.log(data)
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

exports.onSendMessage = function (req, res) {
    try {
        var data = req.body

        ChatModel.sendMessage(data, function(result) {
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
