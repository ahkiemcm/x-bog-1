const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Creature = new Schema({
    name: String,
    atkPower: Number,
    description: String
})

module.exports = mongoose.model('Creature', Creature)
