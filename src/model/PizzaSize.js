const mongoose = require("mongoose")

const PizzaSizeSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    price: {type: Number, required: true}
})

const PizzaSize = mongoose.model("pizzasizes", PizzaSizeSchema)

module.exports = PizzaSize