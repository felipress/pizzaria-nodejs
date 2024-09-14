const PizzaSize = require("../model/PizzaSize")

const findPizzaSizeById = (id) => {
    return PizzaSize.findById(id)
}

const findAllPizzaSizes = () => {
    return PizzaSize.find()
}

const createPizzaSize = (body) => {
    return PizzaSize.create(body)
}

const updatePizzaSize = (id, body) => {
    return PizzaSize.findByIdAndUpdate(id, body, {returnDocument: "after"})
}


const updateAvailability = (id, availability) => {
    return PizzaSize.findOneAndUpdate(
        {_id: id},
        {
            $set: {availability: availability}
        }
    )
}

const removePizzaSize = (id) => {
    return PizzaSize.findByIdAndDelete(id)
}

module.exports = {
    findPizzaSizeById,
    findAllPizzaSizes,
    createPizzaSize,
    updatePizzaSize,
    updateAvailability,
    removePizzaSize
}
