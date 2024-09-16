const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")

const {auth, adminUser} = require("../middleware/auth.middleware")
const {validateUser, validateIdBody} = require("../middleware/validation.middleware")
const {validateAddress} = require("../middleware/validation.middleware")
const {validateIdParams} = require("../middleware/validation.middleware")
const pagination = require("../middleware/pagination.middleware")

// GET routes
router.get("/findById/:id", auth, validateIdParams, userController.findUserById)
router.get("/findAll", auth, adminUser, pagination, userController.findAllUsers)

// POST routes
router.post("/create", validateUser, userController.createUser)
router.post("/addAddress/:id", auth, validateIdParams, validateAddress, userController.addUserAddress)

// PUT route
router.put("/update/:id", auth, validateIdParams, validateUser, userController.updateUser)

// DELETE routes
router.delete("/remove/:id", auth, adminUser, validateIdParams, userController.removeUser)
router.delete("/removeAddress", auth, userController.removeUserAddress)

module.exports = router