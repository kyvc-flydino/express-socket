var ChatModel = require('../models/chat')

exports.onGetMessage = function (req, res) {
    try {
        ChatModel.getMessage(req.params.id, function(result) {
            res.send({
                status: 200,
                success: true,
                result
            })
        })
    } catch (error) {
        res.send({
            status: 500,
            success: false,
            message: 'Get all messages in room failed!'
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
                result
            })
        })
    } catch (error) {
        res.send({
            status: 500,
            success: false,
            message: 'Send message failed!'
        })
    }
}
