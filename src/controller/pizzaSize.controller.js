const PizzaSizeService = require("../service/pizzaSize.service")

const findPizzaSizeById = async (req, res) => {
    try{
        const pizzaSize = await PizzaSizeService.findPizzaSizeById(req.params.id)
        if(!pizzaSize){
            return res.status(404).send({
                message: `Nenhum resultado foi encontrado.`
            })
        }
        return res.status(200).send(pizzaSize)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllPizzaSizes = async (req, res) => {
    try{
        const PizzaSizes = await PizzaSizeService.findAllPizzaSizes()
        return res.status(200).send(PizzaSizes)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createPizzaSize = async (req, res) => {
    try{
        const PizzaSize = await PizzaSizeService.createPizzaSize(req.body)
        return res.status(201).send(PizzaSize)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updatePizzaSize = async (req, res) => {
    try{
        const PizzaSize = await PizzaSizeService.updatePizzaSize(req.params.id, req.body)
        return res.status(200).send(PizzaSize)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateAvailability = async (req, res) => {
    try{
        const {available} = req.body
        const PizzaSize = await PizzaSizeService.updateAvailability(req.params.id, available)
        return res.status(200).send(PizzaSize)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removePizzaSize = async (req, res) => {
    try{
        const PizzaSize = await PizzaSizeService.removePizzaSize(req.params.id)
        return res.status(200).send(PizzaSize)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    findPizzaSizeById,
    findAllPizzaSizes,
    createPizzaSize,
    updatePizzaSize,
    updateAvailability,
    removePizzaSize
}