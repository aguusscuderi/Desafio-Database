require('dotenv').config()

let db = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    table: process.env.T_NAME
}

console.log(db)

module.exports = db 