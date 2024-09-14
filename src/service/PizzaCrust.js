const PizzaCrust = require("../model/PizzaCrust")

const findPizzaCrustById = (id) => {
    return PizzaCrust.findById(id)
}

const findAllPizzaCrusts = () => {
    return PizzaCrust.find()
}

const createPizzaCrust = (body) => {
    return PizzaCrust.create(body)
}

const updatePizzaCrust = (id, body) => {
    return PizzaCrust.findByIdAndUpdate(id, body, {returnDocument: "after"})
}


const updateAvailability = (id, availability) => {
    return PizzaCrust.findOneAndUpdate(
        {_id: id},
        {
            $set: {availability: availability}
        }
    )
}

const removePizzaCrust = (id) => {
    return PizzaCrust.findByIdAndDelete(id)
}

module.exports = {
    findPizzaCrustById,
    findAllPizzaCrusts,
    createPizzaCrust,
    updatePizzaCrust,
    updateAvailability,
    removePizzaCrust
}
