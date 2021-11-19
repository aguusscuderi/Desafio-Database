const express = require('express')
const app = express()
let db_obj = require('./config/db')
let db = db_obj.client
const PORT = 3000

(async () => {
    try{

    }catch(e){
        console.log(e, 'error')
    }
})()




app.listen(PORT, () => {
    console.log('Conectado al Desafio Database')
})

