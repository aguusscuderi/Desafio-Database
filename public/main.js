const noteForm = document.querySelector('#noteForm')
const title = document.querySelector('#title')
const price = document.querySelector('#price')

noteForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    //console.log(title.value, price.value)
    saveNote(title.value, price.value)
})

let chat_container = document.getElementById("app_chat");
let mensaje = document.getElementById("inputtext");
let email =  document.getElementById("email_user");
let btn = document.getElementById("mibtn");
let p = document.getElementById("contenedor");
const form_data_user = document.getElementById('form_data_user');

form_data_user.addEventListener('submit', (e) =>{
    e.preventDefault()
    //console.log(email.value, mensaje.value)
    saveMessage(email.value, mensaje.value)
})