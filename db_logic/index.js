const knex = require('knex')
let mysql = require('../config/db')
let config = require('../config/sqliteConfig')
let sqliteDB = knex(config.development)

async function addmessage(newmsg){
    try {
        const [id] = await sqliteDB('chat').insert(newmsg)
        return id
    }
    catch(err){
        if(err.code === 'SQLITE_ERROR')
            await sqliteDB.schema.createTable('chat', table => {
              table.increments()
              table.text('email', 128).notNullable()
              table.text('message', 128).notNullable()
              table.timestamps(true, true);
            })
        await sqliteDB('chat').insert(newmsg);
    }
}

async function addproduct(newproduct){
    try {
        await mysql('products').insert(newproduct);
    } 
    catch(err){
        console.log(err)
    }
}

module.exports = { addmessage, addproduct }