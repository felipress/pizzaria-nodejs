const PizzaFlavorService = require("../service/pizzaFlavor.service")

const findPizzaFlavorById = async (req, res) => {
    try{
        const PizzaFlavor = await PizzaFlavorService.findPizzaFlavorById(req.params.id)
        return res.status(200).send(PizzaFlavor)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllPizzaFlavors = async (req, res) => {
    try{
        const PizzaFlavors = await PizzaFlavorService.findAllPizzaFlavors()
        return res.status(200).send(PizzaFlavors)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createPizzaFlavor = async (req, res) => {
    try{
        const PizzaFlavor = await PizzaFlavorService.createPizzaFlavor(req.body)
        return res.status(201).send(PizzaFlavor)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updatePizzaFlavor = async (req, res) => {
    try{
        const PizzaFlavor = await PizzaFlavorService.updatePizzaFlavor(req.params.id, req.body)
        return res.status(200).send(PizzaFlavor)
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
        const PizzaFlavor = await PizzaFlavorService.updateAvailability(req.params.id, available)
        return res.status(200).send(PizzaFlavor)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removePizzaFlavor = async (req, res) => {
    try{
        const PizzaFlavor = await PizzaFlavorService.removePizzaFlavor(req.params.id)
        return res.status(200).send(PizzaFlavor)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    findPizzaFlavorById,
    findAllPizzaFlavors,
    createPizzaFlavor,
    updatePizzaFlavor,
    updateAvailability,
    removePizzaFlavor
}