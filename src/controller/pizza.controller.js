const pizzaService = require("../service/pizza.service")
const userService = require("../service/user.service")

const findPizzaById = async (req, res) => {
    try{
        const pizza = await pizzaService.findPizzaById(req.params.id)
        if(!pizza){
            return res.status(404).send({
                message: `Nenhum resultado foi encontrado.`
            })
        }
        return res.status(200).send(pizza)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

/*
    This function returns only public pizzas.
    Public pizzas are created by adminUsers
*/
const findAllPizzas = async (req, res) => {
    try{
        const pizzas = await pizzaService.findAllPizzas(req.query.limit, req.query.offset)
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
        const user = await userService.findUserById(req.userId)
        let body = {
            ...req.body
        }
        if(user.adminUser){
            body.public = "public"
        }
        const pizza = await pizzaService.createPizza(body)
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
        const pizza = await pizzaService.updatePizza(req.params.id, req.body)
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
        const {available} = req.body
        const pizza = await pizzaService.updateAvailability(req.params.id, available)
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
        const pizza = await pizzaService.removePizza(req.params.id)
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