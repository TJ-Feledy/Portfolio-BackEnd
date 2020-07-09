const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
)

require('dotenv').config()

const countRouter = require('./count/countRouter')

const server = express()

server.use(express.json())
server.use(cors())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use('/api/count', countRouter)

server.get('/', (req, res) => {
    res.send('Can you see it?')
})

server.post('/text', (req, res) => {
    res.header('Content-Type', 'application/json')
    client.messages
        .create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: +12195772978,
            body: req.body.body
        })
        .then(() => {
            res.send(JSON.stringify({ success: true }))
        })
        .catch((err) => {
            console.log(err)
            res.send(JSON.stringify({ success: false, error: req.body }))
        })
})

module.exports = server