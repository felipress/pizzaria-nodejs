const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    cart: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "carts"},
    products: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, ref: "pizzas"},
            quantity: {type: Number, required: true}
        },
        {
            _id: {type: mongoose.Schema.Types.ObjectId, ref: "sidedishes"},
            quantity: {type: Number, required: true}
        }
    ],
    price: {
        totalPrice: {type: Number, required: true},
        voucher: {type: String},
        discount: {type: Number},
        finalPrice: {type: Number, required: true}
    },
    shipping: {type: Number, required: true},
    deliveryAddress: {
        street: {type: String, required: true},
        number: {type: Number, required: true},
        complement: {type: String, required: false},
        zipcode: {type: String, required: true}
    },
    payment: {
        method: {type: String, required: true},
        information: {type: String, required: true},
        approved: {type: Boolean, required: true}
    },
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "users"},
    /*
        Order Status can vary during time
        1. New
        2. Preparing
        3. Delivering
        4. Finished
    */
    status: {type: String, required: true, default: "new"},
    createdAt: {type: Date, required: true, default: Date.now()}
})

const Order = mongoose.model("orders", OrderSchema)

module.exports = Order