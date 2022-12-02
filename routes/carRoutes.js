const router = require('express').Router()

const Car = require('../models/Car')

// Create
router.post('/', async (req, res) => {
    const {brand, name, year, price, sold} = req.body

    if(!brand) {
        res.status(422).json({ error: 'A marca é obrigatória!' })
        return
    }

    const car = {
        brand,
        name,
        year,
        price,
        sold
    }

    try {

        await Car.create(car)
        
        res.status(201).json({ message: 'Carro cadastrado com sucesso!' })
        
    } catch (error) {
        res.status(500).json({error: error})
    }

})

// Read

router.get('/', async(req, res) => {
    
    try {

        const cars = await Car.find()
        res.status(200).json(cars)
        
    } catch (error) {
        res.status(500).json({error: error})
    }

})

router.get('/:id', async (req, res) => {
    
    // Data extracted by url
    const id = req.params.id

    try {

        const car = await Car.findOne({ _id: id })

        if(!car) {
            res.status(422).json({ message: 'O carro não foi encontrado!' })
            return
        }

        res.status(200).json(car)
        
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

module.exports = router