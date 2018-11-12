require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const app = express()
const router = require('./routes/index')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send("Hello World")
})
app.use('/', router)
app.use(express.static(__dirname + '/client/build/'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('App is up and running on port ' + PORT)
})