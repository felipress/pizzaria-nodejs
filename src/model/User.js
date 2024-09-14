const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    birthday: {type: Date, required: true},
    address: [
        {
            street: {type: String, required: true},
            number: {type: Number, required: true},
            complement: {type: String, required: false},
            zipcode: {type: String, required: true},
            createdAt: {type: Date, required: true, default: Date.now()}
        }
    ],
    createAt: {type: Date, required: true, default: Date.now()},
    adminUser: {type: Boolean, required: true, default: false}
})

// Encrypting password 10 times using bcrypt
UserSchema.pre("save", async function (next){
    if(this.password){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

UserSchema.pre("findOneAndUpdate", async function (next){
    if(this._update.password){
        this._update.password = await bcrypt.hash(this._update.password, 10)
    }
    next()
})


const User = mongoose.model("users", UserSchema)

module.exports = User