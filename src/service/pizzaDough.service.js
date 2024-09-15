const PizzaDough = require("../model/PizzaDough")

const findPizzaDoughById = (id) => {
    return PizzaDough.findById(id)
}

const findAllPizzaDoughs = () => {
    return PizzaDough.find()
}

const createPizzaDough = (body) => {
    return PizzaDough.create(body)
}

const updatePizzaDough = (id, body) => {
    return PizzaDough.findByIdAndUpdate(id, body, {returnDocument: "after"})
}


const updateAvailability = (id, availability) => {
    return PizzaDough.findOneAndUpdate(
        {_id: id},
        {
            $set: {available: availability}
        }
    )
}

const removePizzaDough = (id) => {
    return PizzaDough.findByIdAndDelete(id)
}

module.exports = {
    findPizzaDoughById,
    findAllPizzaDoughs,
    createPizzaDough,
    updatePizzaDough,
    updateAvailability,
    removePizzaDough
}
