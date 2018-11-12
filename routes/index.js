const express = require('express')
const router = express.Router()
const creatureController = require('../controllers/creatureController')

router.get('/creatures', creatureController.index)
router.get('/creatures/new', creatureController.new)
router.post('/creatures', creatureController.create)
router.get('/creatures/:id', creatureController.show)
router.get('/creatures/:id/edit', creatureController.edit)
router.patch('/creatures/:id', creatureController.update)
router.put('/creatures/:id', creatureController.update)
router.delete('/creatures/:id', creatureController.delete)

module.exports = router