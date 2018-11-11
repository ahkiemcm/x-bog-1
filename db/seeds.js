const mongoose = require('./connections')
const Creature = require('../models/Creature')

const darkMagician = new Creature({
    name: 'Dark Magician',
    atkPower: 2500,
    description: "Magician of dark magic"
})

const redEyes = new Creature({
    name: 'Red-Eyes Black Dragon',
    atkPower: 2300,
    description: 'Big ass dragon with red eyes'
})

const celticWarrior = new Creature({
    name: 'Celtic Warrior',
    atkPower: 1100,
    description: 'Yo, he weak af but he got heart'
})
Creature.remove({})
    .then(() => Creature.insertMany([darkMagician, redEyes, celticWarrior]))
    .then(() => darkMagician.save())
    .then(() => redEyes.save())
    .then(() => celticWarrior.save())
    .then(() => console.log("Saved Succesfully"))
    .then(() => mongoose.connection.close())