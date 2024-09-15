const Pizza = require("../model/Pizza")

const findPizzaById = (id) => {
    return Pizza.findById(id)
}

const findAllPizzas = () => {
    return Pizza.find()
}

const createPizza = (body) => {
    return Pizza.create(body)
}

const updatePizza = (id, body) => {
    return Pizza.findByIdAndUpdate(id, body, {returnDocument: "after"})
}

const updateAvailability = (id, availability) => {
    return Pizza.findOneAndUpdate(
        {_id: id},
        {
            $set: {available: availability}
        }
    )
}

const removePizza = (id) => {
    return Pizza.findByIdAndDelete(id)
}

module.exports = {
    findPizzaById,
    findAllPizzas,
    createPizza,
    updatePizza,
    updateAvailability,
    removePizza
}
