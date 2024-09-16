const mongoose = require("mongoose")

const SideDishesSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    createAt: {type: Date, required: true, default: Date.now()}
})

const SideDishes = mongoose.model("sidedishes", SideDishesSchema)

module.exports = SideDishes