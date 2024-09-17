const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    products: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, ref: "pizza"},
            quantity: {type: Number, required: true}
        },
        {
            _id: {type: mongoose.Schema.Types.ObjectId, ref: "sidedishes"},
            quantity: {type: Number, required: true}
        }
    ],
    voucher: {type: String},
    zipcode: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "users"},
    createdAt: {type: Date, required: true, default: Date.now()}
})

const Cart = mongoose.model("carts", CartSchema)

module.exports = Cart