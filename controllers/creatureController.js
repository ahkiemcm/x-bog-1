const Creature = require('../models/Creature')

const creatureController = {
    index: (req, res) => {
        creature.find({})
            .then((creature) => {
                res.send(creature)
            })
    },
    new: (req, res) => {

        res.send("New")
    },
    show: (req, res) => {
        Creature.findById(req.params.creatureId)
            .then((creature) => {
                res.send(creature)
            })
    },
    edit: (req, res) => {
        var creatureEdit = req.params.id
        creature.findById(creatureEdit).then(creature => {
            res.render('/creature/:id/edit', { creature: creature })
        })
    },
    update: (req, res) => {
        Creature.findByIdAndUpdate(req.params.creatureId, req.body)
            .then((updatedCreature) => {
                updatedCreature.save()
                res.send(updatedCreature)
            })
    },
    delete: (req, res) => {
        Creature.findByIdAndDelete(req.params.creatureId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        Creature.create(req.body)
            .then((creature) => {
                res.send(creature)
            })
    }
}

module.exports = creatureController