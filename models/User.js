const db = require('../database/connect')
const UserModel = function(user) {
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.password = user.password
    this.type = user.type
}

UserModel.getUsers = function(result) {
    db.query("SELECT * FROM users", function(err, user) {
        if (err) {
            result(null)
        } else {
            result(user)
        }
    })
}

UserModel.getUserById = function(id, result) {
    db.query("SELECT * FROM users WHERE id =?", id, function(err, user) {
        if (err) {
            result(null)
        } else {
            result(user)
        }
    })
}

UserModel.createUser = function(data, result) {
    db.query("INSERT INTO users SET ?", data, function(err, user) {
        if (err) {
            result(null)
        } else {
            result({ id: user.insertId, ...data })
        }
    })
}

UserModel.deleteUserById = function(id, result) {
    db.query("DELETE FROM users WHERE id =?", id, function(err, user) {
        if (err) {
            result(null)
        } else {
            result("Delete user success.")
        }
    })
}

module.exports = UserModel
