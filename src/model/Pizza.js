const mongoose = require("mongoose")

const PizzaSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    size: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzasizes"},
    dough: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzadoughs"},
    crust: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzacrusts"},
    flavors: [
        {type: mongoose.Schema.Types.ObjectId, required: true, ref: "pizzaflavors"}
    ],
    public: {type: Boolean, required: true, default: false},
    available: {type: Boolean, required: true, default: true},
    authorId: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    createAt: {type: Date, required: true, default: Date.now()}
})

const Pizza = mongoose.model("pizzas", PizzaSchema)

module.exports = Pizza