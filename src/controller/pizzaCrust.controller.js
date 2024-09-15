const PizzaCrustService = require("../service/pizzaCrust.service")

const findPizzaCrustById = async (req, res) => {
    try{
        const PizzaCrust = await PizzaCrustService.findPizzaCrustById(req.params.id)
        return res.status(200).send(PizzaCrust)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllPizzaCrusts = async (req, res) => {
    try{
        const PizzaCrusts = await PizzaCrustService.findAllPizzaCrusts()
        return res.status(200).send(PizzaCrusts)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createPizzaCrust = async (req, res) => {
    try{
        const PizzaCrust = await PizzaCrustService.createPizzaCrust(req.body)
        return res.status(201).send(PizzaCrust)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updatePizzaCrust = async (req, res) => {
    try{
        const PizzaCrust = await PizzaCrustService.updatePizzaCrust(req.params.id, req.body)
        return res.status(200).send(PizzaCrust)
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
        const PizzaCrust = await PizzaCrustService.updateAvailability(req.params.id, available)
        return res.status(200).send(PizzaCrust)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removePizzaCrust = async (req, res) => {
    try{
        const PizzaCrust = await PizzaCrustService.removePizzaCrust(req.params.id)
        return res.status(200).send(PizzaCrust)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    findPizzaCrustById,
    findAllPizzaCrusts,
    createPizzaCrust,
    updatePizzaCrust,
    updateAvailability,
    removePizzaCrust
}