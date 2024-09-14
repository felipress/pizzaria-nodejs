const mongoose = require("mongoose")

const PizzaDoughSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    price: {type: Number, required: true},
    createAt: {type: Date, required: true, default: Date.now()}
})

const PizzaDough = mongoose.model("pizzadoughs", PizzaDoughSchema)

module.exports = PizzaDough