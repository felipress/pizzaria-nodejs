const CartService = require("../service/cart.service")

const findCartById = async (req, res) => {
    try{
        const cart = await CartService.findCartById(req.params.id)
        return res.status(200).send(cart)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllCarts = async (req, res) => {
    try{
        const carts = await CartService.findAllCarts(req.query.limit, req.query.offset)
        return res.status(200).send(carts)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createCart = async (req, res) => {
    try{
        console.log(req.userId)
        let body = [{
            ...req.body,
            userId: req.userId
        }]
        const cart = await CartService.createCart(body)
        return res.status(201).send({
            message: `Item cadastrado com sucesso.`,
            details: cart
        })
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateCart = async (req, res) => {
    try{
        const cart = await CartService.updateCart(req.params.id, req.body)
        return res.status(200).send({
            message: `Item atualizado com sucesso.`,
            details: cart
        })
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeCart = async (req, res) => {
    try{
        const cart = await CartService.removeCart(req.params.id)
        return res.status(200).send({
            message: `Item removido com sucesso.`,
            details: cart
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
    findCartById,
    findAllCarts,
    createCart,
    updateCart,
    removeCart
}