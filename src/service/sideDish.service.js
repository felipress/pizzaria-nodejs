const SideDishes = require("../model/SideDish")

const findSideDishById = (id) => {
    return SideDishes.findById(id)
}

const findAllSideDishes = (limit, offset) => {
    return SideDishes.find().limit(limit).skip(offset)
}

const createSideDish = (body) => {
    return SideDishes.create(body)
}

const updateSideDish = (id, body) => {
    return SideDishes.findByIdAndUpdate(id, body, {returnDocument: "after"})
}

const updateAvailability = (id, availability) => {
    return SideDishes.findOneAndUpdate(
        {_id: id},
        {
            $set: {
                available: availability
            }
        },
        {rawResults: true}
    )
}

const removeSideDish = (id) => {
    return SideDishes.findByIdAndDelete(id)
}

module.exports = {
    findSideDishById,
    findAllSideDishes,
    createSideDish,
    updateSideDish,
    updateAvailability,
    removeSideDish
}