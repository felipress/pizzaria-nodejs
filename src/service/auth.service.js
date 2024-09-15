const User = require("../model/User")
const jwt = require("jsonwebtoken")

const login = (email) => {
    return User.findOne({email: email}).select("password")
}

const generateToken = (userId) => {
    return jwt.sign({id: userId}, process.env.SECRET, {expiresIn: 86400})
}

module.exports = {
    login,
    generateToken
}