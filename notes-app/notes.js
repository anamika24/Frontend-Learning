const fs = require('fs')

function getNotes() {
    return "Your notes...!"
}

const addNote = function (title, body) {
    const notes = loadNotes()
    console.log(notes)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.js')
        const data = dataBuffer.toString()
        return JSON.parse(data)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}
