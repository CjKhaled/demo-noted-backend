const notes = require('../models/notes')

function createNote(title, content, groupId) {
    const createId = notes.length + 1;
    notes.push({
        id: createId,
        title: title,
        content: content,
        groupId: groupId,
        createdAt: Date.now()
    })

    return notes[createId]
}

function getNotes(groupId) {
    if (groupId == 1) {
        return notes
    }

    const filteredNotes = notes.filter((note) => note.groupId == groupId)
    return filteredNotes
}


module.exports = {
    createNote,
    getNotes,
}