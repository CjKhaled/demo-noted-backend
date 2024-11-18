const express = require('express')
const router = express.Router()
const controller = require('../controllers/groupController')

router.get('/', controller.getAllGroups)
router.post('/create', controller.createNewGroup)
router.put('/update', controller.changeGroupName)
router.delete('/delete/:groupId', controller.deleteGroup)

module.exports = router