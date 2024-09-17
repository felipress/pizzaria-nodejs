const Cart = require("../model/Cart")

const findCartById = (id) => {
    return Cart.findById(id)
}

const findAllCarts = (limit, offset) => {
    return Cart.find().limit(limit).skip(offset)
}

const createCart = (body) => {
    return Cart.create(body)
}

const updateCart = (id, body) => {
    return Cart.findByIdAndUpdate(id, body, {returnDocument: "after"})
}

const removeCart = (id) => {
    return Cart.findByIdAndDelete(id)
}

module.exports = {
    findCartById,
    findAllCarts,
    createCart,
    updateCart,
    removeCart
}