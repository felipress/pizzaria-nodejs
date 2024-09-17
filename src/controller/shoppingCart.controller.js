const ShoppingCartService = require("../service/shoppingCart.service")

const findShoppingCartById = async (req, res) => {
    try{
        const shoppingCart = await ShoppingCartService.findShoppingCartById(req.params.id)
        return res.status(200).send(shoppingCart)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllShoppingCarts = async (req, res) => {
    try{
        const shoppingCarts = await ShoppingCartService.findAllShoppingCarts(req.query.limit, req.query.offset)
        return res.status(200).send(shoppingCarts)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createShoppingCart = async (req, res) => {
    try{
        console.log(req.userId)
        let body = {
            ...req.body,
            userId: req.userId
        }
        const shoppingCart = await ShoppingCartService.createShoppingCart(body)
        return res.status(201).send({
            message: `Item cadastrado com sucesso.`,
            details: shoppingCart
        })
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateShoppingCart = async (req, res) => {
    try{
        const shoppingCart = await ShoppingCartService.updateShoppingCart(req.params.id, req.body)
        return res.status(200).send({
            message: `Item atualizado com sucesso.`,
            details: shoppingCart
        })
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeShoppingCart = async (req, res) => {
    try{
        const shoppingCart = await ShoppingCartService.removeShoppingCart(req.params.id)
        return res.status(200).send({
            message: `Item removido com sucesso.`,
            details: shoppin
        })
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    findShoppingCartById,
    findAllShoppingCarts,
    createShoppingCart,
    updateShoppingCart,
    removeShoppingCart
}