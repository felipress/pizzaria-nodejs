const mongoose = require("mongoose")

const PizzaCrustSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    price: {type: Number, required: true}
})

const PizzaCrust = mongoose.model("pizzacrusts", PizzaCrustSchema)

module.exports = PizzaCrust