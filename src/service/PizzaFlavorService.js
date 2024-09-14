const PizzaFlavor = require("../model/PizzaFlavor")

const findPizzaFlavorById = (id) => {
    return PizzaFlavor.findById(id)
}

const findAllPizzaFlavors = () => {
    return PizzaFlavor.find()
}

const createPizzaFlavor = (body) => {
    return PizzaFlavor.create(body)
}

const updatePizzaFlavor = (id, body) => {
    return PizzaFlavor.findByIdAndUpdate(id, body, {returnDocument: "after"})
}


const updateAvailability = (id, availability) => {
    return PizzaFlavor.findOneAndUpdate(
        {_id: id},
        {
            $set: {available: availability}
        }
    )
}

const removePizzaFlavor = (id) => {
    return PizzaFlavor.findByIdAndDelete(id)
}

module.exports = {
    findPizzaFlavorById,
    findAllPizzaFlavors,
    createPizzaFlavor,
    updatePizzaFlavor,
    updateAvailability,
    removePizzaFlavor
}
