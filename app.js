const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/Movie')
require('dotenv').config()


const app = express()
app.use(express.json())
app.use('/api', routes)

const mongoString = process.env.DB_URL
mongoose.connect(mongoString)
const db = mongoose.connection;

db.on('error', (err) => console.log(err))
db.on('connected', () => console.log("Db Connected"))

app.listen(8080, () => {
    console.log("Server started localhost:8080")
})