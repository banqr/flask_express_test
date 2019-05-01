const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db/connection')
const port = process.env.PORT || 3000
const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    const obj = {
        message: 'Ola!'
    }
    res.json(obj)
})

app.get('/krediti', (req, res) => {
    const krediti = db.get('credit_data')

    krediti.find({})
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

app.listen(port, () => {
    console.log(`Slušam port ${port}!`)
})