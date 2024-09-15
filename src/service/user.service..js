const User = require("../model/User")

// User functions 
const findUserById = (id) => {
    return User.findById(id)
}

const findAllUsers = (limit, offset) => {
    return User.find().limit(limit).skip(offset)
}

const createUser = (body) => {
    return User.create(body)
}

const updateUser = (id, body) => {
    return User.findByIdAndUpdate(id, body, {returnDocument: "after"})
}

const removeUser = (id) => {
    return User.findByIdAndDelete(id)
}

// User address functions
const addUserAddress = (userId, userAddress) => {
    return User.findOneAndUpdate(
        {
            _id: userId
        },
        {
            $push: {
                address: userAddress
            }
        },
        {
            rawResults: true
        }
    )
}

const removeUserAddress = (userId, addressId) => {
    return User.findOneAndUpdate(
        {
            _id: userId
        },
        {
            $pull: {
                address: {
                    _id: addressId
                }
            }
        },
        {rawResults: true}
    )
}

// User favorite products
const addUserFavoriteProduct = (id, product) => {
    return User.findOneAndUpdate(
        {_id: id},
        {
            $push: {
                favorite_products: {
                    _id: product.id
                }
            }
        },
        {rawResults: true}
    )
}

const removeUserFavoriteProduct = (id, product) => {
    return User.findOneAndUpdate(
        {_id: id},
        {
            $pull: {
                favorite_products: {
                    _id: product.id
                }
            }
        },
        {rawResults: true}
    )
}

module.exports = {
    findUserById,
    findAllUsers,
    createUser,
    updateUser,
    removeUser,
    addUserAddress,
    removeUserAddress,
    addUserFavoriteProduct,
    removeUserFavoriteProduct
}