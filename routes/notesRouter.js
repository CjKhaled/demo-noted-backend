const express = require('express')
const router = express.Router()
const controller = require('../controllers/notesController')

router.get('/:groupId', controller.getNotesForGroup)
router.post('/create', controller.createNewNote)

module.exports = router