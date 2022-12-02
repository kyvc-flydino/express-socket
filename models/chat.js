const db = require('../database/connect')
const ChatModel = function(chat) {
    this.id = chat.id
    this.room_id = chat.room_id
    this.name = chat.name
    this.message = chat.message
    this.created_at = chat.created_at
}

ChatModel.getMessage = function(id, result) {
    db.query("SELECT * FROM chats WHERE room_id=?", id, function(err, chat) {
        if (err) {
            result(null)
        } else {
            result(chat)
        }
    })
}

ChatModel.sendMessage = function(data, result) {
    db.query("INSERT INTO chats SET ?", data, function(err, chat) {
        if (err) {
            result(null)
        } else {
            result({ id: chat.insertId, ...data })
        }
    })
}

module.exports = ChatModel
