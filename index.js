// Initial configuration
const express = require('express')
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

// Open port
app.listen(3000)