const PizzaDoughService = require("../service/pizzaDough.service")

const findPizzaDoughById = async (req, res) => {
    try{
        const pizzaDough = await PizzaDoughService.findPizzaDoughById(req.params.id)
        if(!pizzaDough){
            return res.status(404).send({
                message: `Nenhum resultado foi encontrado.`
            })
        }
        return res.status(200).send(pizzaDough)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllPizzaDoughs = async (req, res) => {
    try{
        const PizzaDoughs = await PizzaDoughService.findAllPizzaDoughs()
        return res.status(200).send(PizzaDoughs)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createPizzaDough = async (req, res) => {
    try{
        const PizzaDough = await PizzaDoughService.createPizzaDough(req.body)
        return res.status(201).send(PizzaDough)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updatePizzaDough = async (req, res) => {
    try{
        const PizzaDough = await PizzaDoughService.updatePizzaDough(req.params.id, req.body)
        return res.status(200).send(PizzaDough)
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
        const PizzaDough = await PizzaDoughService.updateAvailability(req.params.id, available)
        return res.status(200).send(PizzaDough)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removePizzaDough = async (req, res) => {
    try{
        const PizzaDough = await PizzaDoughService.removePizzaDough(req.params.id)
        return res.status(200).send(PizzaDough)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    findPizzaDoughById,
    findAllPizzaDoughs,
    createPizzaDough,
    updatePizzaDough,
    updateAvailability,
    removePizzaDough
}