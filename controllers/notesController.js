const notesService = require("../services/notesService");

function createNewNote(req, res, next) {
    try {
        const { title, content, groupId } = req.body;
        const newNote = notesService.createNote(title, content, groupId);
        res.status(200).json({ newNote });
    } catch (error) {
        next(error);
    }
}

function getNotesForGroup(req, res, next) {
    try {
        const { groupId } = req.params;
        const notes = notesService.getNotes(groupId);
        res.status(200).json({ notes });
    } catch (error) {
        next(error);
    }
}



module.exports = {
    createNewNote,
    getNotesForGroup,
}