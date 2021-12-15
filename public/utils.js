const notes = document.querySelector('#notes')

const addNote = note =>{
    notes.innerHTML += `<div>
                            <h1>${note.title}</h1>
                        </div>
                        <p>${note.price}</p>
    
                    `
}

const loadNotes = (notes) => {
    notes.forEach((note)=>addNote(note))
}


const addMessage = message =>{
    p.innerHTML += `<div>
                        <h1>${message.email}</h1>
                    </div>
                    <p>${message.message}</p>
    
                    `
}

const loadMessage = (messages) => {
    messages.forEach((message)=>addMessage(message))
}