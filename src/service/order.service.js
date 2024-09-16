const Order = require("../model/Order")

const findOrderById = (id) => {
    return Order.findById(id)
}

const findAllOrders = (limit, offset, userId = null) => {
    if(userId){
        return Order.find({userId: userId}).limit(limit).skip(offset)
    }
    return Order.find().limit(limit).skip(offset)
}

const createOrder = (body) => {
    return Order.create(body)
}

const updateStatus = (id, status) => {
    return Order.findOneAndUpdate(
        {_id: id},
        {
            $set: {
                status: status
            }
        },
        {rawResults: true}
    )
}

module.exports = {
    findOrderById,
    findAllOrders,
    createOrder,
    updateStatus
}