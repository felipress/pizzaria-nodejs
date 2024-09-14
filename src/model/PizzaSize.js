const mongoose = require("mongoose")

const PizzaSizeSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    price: {type: Number, required: true},
    available: {type: Boolean, required: true, default: true},
    createAt: {type: Date, required: true, default: Date.now()}
})

const PizzaSize = mongoose.model("pizzasizes", PizzaSizeSchema)

module.exports = PizzaSize