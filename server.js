require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const app = express()
const routes = require('./routes/index')

mongoose.connect('process.env.MONGODB_URI')

const db = mongoose.connection
db.on('error', err => {
    console.log(err)
})

db.on('open', () => {
    console.log('Connected to MongoDB')
})

app.use(logger('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('App is up and running on port ' + PORT)
})