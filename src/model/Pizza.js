const mongoose = require("mongoose")

const PizzaSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    size: [
        {type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzasizes"}
    ],
    dough: [
        {type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzadoughs"}
    ],
    crust: [
        {type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzacrusts"}
    ],
    flavors: [
        {type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzaflavors"}
    ],
    available: {type: String, required: true, default: true},
    createAt: {type: Date, required: true, default: Date.now()}
})

const Pizza = mongoose.model("pizzas", PizzaSchema)

module.exports = Pizza