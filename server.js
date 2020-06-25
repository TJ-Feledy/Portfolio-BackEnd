const express = require('express')
const cors = require('cors')

require('dotenv').config()

const countRouter = require('./count/countRouter')

const server = express()

server.use(express.json())
server.use(cors())

server.use('/api/count', countRouter)

server.get('/', (req, res) => {
    res.send('Can you see it?')
})

module.exports = server