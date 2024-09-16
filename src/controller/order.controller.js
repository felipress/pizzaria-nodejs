const orderService = require("../service/order.service")

const findOrderById = async (req, res) => {
    try{
        const order = await orderService.findOrderById(req.params.id)
        if(!order){
            return res.status(404).send({
                message: `Nenhum resultado encontrado.`
            })
        }
        return res.status(200).send(order)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllOrders = async (req, res) => {
    try{
        const orders = await orderService.findAllOrders(req.query.limit, req.query.offset, req.userId)
        if(!orders){
            return res.status(404).send({
                message: `Nenhum resultado encontrado.`
            })
        }
        return res.status(200).send(orders)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllUsersOrders = async (req, res) => {
    try{
        const orders = await orderService.findAllOrders(req.query.limit, req.query.offset)
        if(!orders){
            return res.status(404).send({
                message: `Nenhum resultado encontrado.`
            })
        }
        return res.status(200).send(orders)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}


const createOrder = async (req, res) => {
    try{
        const order = await orderService.createOrder(req.body)
        return res.status(200).send({
            message: `Pedido criado com sucesso.`,
            details: order
        })
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateStatus = async (req, res) => {
    try{

    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    findOrderById,
    findAllOrders,
    findAllUsersOrders,
    createOrder,
    updateStatus
}