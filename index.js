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

// Initial Route
app.get('/', (req, res) => {
    res.json({ message: 'Olá Mundo!' })
})

const DB_USER=''
const DB_PASSWORD=''

mongoose
    .connect (
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apicluster.a0fwftb.mongodb.net/apidb?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("DB Connected")
        console.log(process.env.DB_USER)
        // Open port
        app.listen(3000)
    })
    .catch()
