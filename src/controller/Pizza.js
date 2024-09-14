const PizzaService = require("../service/PizzaService")

const findPizzaById = async (req, res) => {
    try{
        const pizza = await PizzaService.findPizzaById(req.params.id)
        return res.status(200).send(pizza)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllPizzas = async (req, res) => {
    try{
        const pizzas = await PizzaService.findAllPizzas()
        return res.status(200).send(pizzas)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createPizza = async (req, res) => {
    try{
        const pizza = await PizzaService.createPizza(req.body)
        return res.status(201).send(pizza)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updatePizza = async (req, res) => {
    try{
        const pizza = await PizzaService.updatePizza(req.params.id, req.body)
        return res.status(200).send(pizza)
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
        const pizza = await PizzaService.updateAvailability(req.params.id, req.body)
        return res.status(200).send(pizza)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removePizza = async (req, res) => {
    try{
        const pizza = PizzaService.removePizza(req.params.id)
        return res.status(200).send(pizza)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    findPizzaById,
    findAllPizzas,
    createPizza,
    updatePizza,
    updateAvailability,
    removePizza
}