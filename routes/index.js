const express = require('express')
const router = express.Router()

router.get('/api/creatures', creatureController.index)
router.get('/api/creatures/new', creatureController.new)
router.post('/api/creatures', creatureController.create)
router.get('/api/creatures/:id', creatureController.show)
router.get('/api/creatures/:id/edit', creatureController.edit)
router.patch('/api/creatures/:id', creatureController.update)
router.put('/api/creatures/:id', creatureController.update)
router.delete('/api/creatures/:id', creatureController.delete)

module.exports = router