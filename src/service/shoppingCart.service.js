const ShoppingCart = require("../model/ShoppingCart")

const findShoppingCartById = (id) => {
    return ShoppingCart.findById(id)
}

const findAllShoppingCarts = (limit, offset) => {
    return ShoppingCart.find().limit(limit).skip(offset)
}

const createShoppingCart = (body) => {
    return ShoppingCart.create(body)
}

const updateShoppingCart = (id, body) => {
    return ShoppingCart.findByIdAndUpdate(id, body, {returnDocument: "after"})
}

const removeShoppingCart = (id) => {
    return ShoppingCart.findByIdAndDelete(id)
}

module.exports = {
    findShoppingCartById,
    findAllShoppingCarts,
    createShoppingCart,
    updateShoppingCart,
    removeShoppingCart
}