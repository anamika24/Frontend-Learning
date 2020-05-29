const fs = require('fs')

function getNotes() {
    return "Your notes...!"
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter( function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New note added!")
    }
    else {
        console.log("Note title taken")
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notetoKeep = notes.filter( function (note) {
        return note.title !== title
    })
    saveNotes(notetoKeep)
 }

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
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
    removeNote: removeNote
}