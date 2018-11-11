const Creature = require('../models/Creature')

const creatureController = {
    index: (req, res) => {
        creature.find({})
            .then((creature) => {
                res.send(creature)
            })
    },
    show: (req, res) => {
        Creature.findById(req.params.userId)
            .then((creature) => {
                res.send(creature)
            })
    },
    update: (req, res) => {
        Creature.findByIdAndUpdate(req.params.userId, req.body)
            .then((updatedCreature) => {
                updatedUser.save()
                res.send(updatedCreature)
            })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId)
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