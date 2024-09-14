const mongoose = require("mongoose")

const PizzaCrustSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    price: {type: Number, required: true},
    available: {type: Boolean, required: true, default: true},
    createAt: {type: Date, required: true, default: Date.now()}
})

const PizzaCrust = mongoose.model("pizzacrusts", PizzaCrustSchema)

module.exports = PizzaCrust