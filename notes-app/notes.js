const fs = require('fs')
const chalk = require('chalk')

 const getNotes = () => {
    return "Your notes...!"
}

const addNote = (title, body) => {
    const notes = loadNotes()
  //  const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)  // not check the whole array
 //   if (duplicateNotes.length === 0) {
     if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    }
    else {
        console.log(chalk.red.inverse("Note title taken"))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notetoKeep = notes.filter((note) => note.title !== title)
    if(notes.length > notetoKeep.length) {
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notetoKeep)
    }
    else {
        console.log(chalk.red.inverse("No note found!!"))
    }
    
 }

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse("Your notes.."))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)
    if (noteToRead) {
        console.log(chalk.yellow.inverse(noteToRead.title))
        console.log(noteToRead.body)
    }
    else {
        console.log(chalk.red.inverse("Note not found!!"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString()
        return JSON.parse(data)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}
