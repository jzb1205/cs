var db = require('mysql2-promise')();

db.configure({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "node"
})

module.exports = db