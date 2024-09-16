const SideDishes = require("../model/SideDish")

const findById = (id) => {
    return SideDishes.findById(id)
}

const findAll = (limit, offset) => {
    return SideDishes.find().limit(limit).skip(offset)
}

const create = (body) => {
    return SideDishes.create(body)
}

const update = (id, body) => {
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

const remove = (id) => {
    return SideDishes.findByIdAndDelete(id)
}

module.exports = {
    findById,
    findAll,
    create,
    update,
    updateAvailability,
    remove
}