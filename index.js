// Initial configuration
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// JSON decoder
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// API Routes
const carRoutes = require('./routes/carRoutes')

app.use ('/car', carRoutes)

// Initial Route
app.get('/', (req, res) => {
    res.json({ message: 'Olá Mundo!' })
})

const DB_USER='alex'
const DB_PASSWORD='HvaTbHj19buO9ac8'

mongoose
    .connect (
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.a0fwftb.mongodb.net/apidb?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("DB Connected")
        // Open port
        app.listen(3000)
    })
    .catch()
