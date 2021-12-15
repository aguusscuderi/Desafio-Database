const express = require('express')
const serverRouter = require('./routes/index')
const app = express()
/*let db_obj = require('./config/db')
let db = db_obj.client*/

const path = require('path')
const PORT = 3000
/*const productClass = require('./scripts/class')
const productsFromFile = new productClass('./public/templates/productos.json')*/

const { Server : IOServer } = require('socket.io')
const { Server : HttpServer } = require('http')
const { v4 : uuid } = require('uuid')
const { addmessage, addproduct } = require('./db_logic/index')
const products = []
const messages = []

const server = new HttpServer(app)
const io = new IOServer(server)


io.on('connection', (socket)=>{
    socket.emit('server:loadnotes', products)
    socket.on('client:newnote', async (data) =>{
        const product = {
            title: data.title,
            price: data.price,
            id: uuid()
        }
        products.push(product)
        await addproduct(product)
        io.sockets.emit('server:newnote', product)
        console.log('ejecutando el socket bro')
    })

    socket.emit('server:loadmessages', messages)
    socket.on('client:newmessage', data => {
        const message = {
            email: data.email,
            message: data.message,
        }

        messages.push(message)
        addmessage(message)
        io.sockets.emit('server:newmessage', message)
        
    })
})


/*const connectDB = async ()=>{
    try{
        let res = await db.from('producto')
        console.log(res, 'la data desde mariadb')
    }catch(e){
        console.log(e, 'error')
    }
}

connectDB()*/

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/", express.static(path.join(__dirname + '/public')))

app.get('/', (req, res) => {
    console.log('entra en get')
    res.render('index')
})
app.set('view engine', 'ejs')
app.set('views', './public')

serverRouter(app)

server.listen(PORT, () => {
    console.log(`Estas conectado a http://localhost:${PORT}`)
})

