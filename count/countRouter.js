const router = require('express').Router()

const Count = require('./count-model')



// ***** endpoints start with /api/count *****


// Initialize count endpoint
router.post('/initialize', (req, res) => {
    const counter = req.body

    console.log('counter', counter)
    Count.initialize(counter)
        .then(count => {
            res.status(201).json(count)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to initialize counter!' })
        })

})

// Update count endpoint
router.put('/update/:id', (req, res) => {
    const counter = req.body
    const id = req.params.id
    console.log('params', counter, id)

    Count.update(counter, id)
        .then(newCount => {
            Count.find(id)
                .then(count => {
                    res.json(count)
                })
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to update Count' })
        })
})

// Get count endpoint
router.get('/:id', (req, res) => {
    const { id } = req.params
    Count.find(id)
        .then(count => {
            res.json(count)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: `${err}` })
        })
})



module.exports = router