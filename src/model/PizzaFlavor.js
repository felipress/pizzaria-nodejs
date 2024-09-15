const mongoose = require("mongoose")

const PizzaFlavorSchema = new mongoose.Schema({
    flavor: {type: String, unique: true, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    available: {type: Boolean, required: true, default: true},
    createdAt: {type: Date, required: true, default: Date.now()}
})

const PizzaFlavor = mongoose.model("pizzaflavors", PizzaFlavorSchema)

module.exports = PizzaFlavor