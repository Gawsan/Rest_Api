const express = require('express')
const router = express.Router();
const model = require('../model/movie')

router.post('/movie', async (req, res) => {
    const data = new model({
        title: req.body.title,
        year: req.body.year
    })
    try {
        const dataSave = await data.save()
        res.status(201).json(dataSave)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.get('/movies', async (req, res) => {
    try {
        const data = await model.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})

router.get('/movie/:id', async (req, res) => {
    try {
        const data = await model.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})

router.put('/movie/:id', async (req, res) => {

    try {
        const result = await model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(result)

    } catch (error) {
        res.status(500).json({ message: error.message })

    }

})

router.delete('/movie/:id', async (req, res) => {

    try {
        const result = await model.findByIdAndDelete(req.params.id)
        res.json(result)

    } catch (error) {
        res.status(500).json({ message: error.message })

    }

})



module.exports = router