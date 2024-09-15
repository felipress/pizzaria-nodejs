const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")

const authMiddleware = require("../middleware/auth.middleware")
const {validateUser, validateIdBody} = require("../middleware/validation.middleware")
const {validateAddress} = require("../middleware/validation.middleware")
const {validateIdParams} = require("../middleware/validation.middleware")
const pagination = require("../middleware/pagination.middleware")

// GET routes
router.get("/findById/:id", authMiddleware, validateIdParams, userController.findUserById)
router.get("/findAll", authMiddleware, pagination, userController.findAllUsers)

// POST routes
router.post("/create", validateUser, userController.createUser)
router.post("/addAddress/:id", authMiddleware, validateIdParams, validateAddress, userController.addUserAddress)

// PUT route
router.put("/update/:id", authMiddleware, validateIdParams, validateUser, userController.updateUser)

// DELETE routes
router.delete("/remove/:id", authMiddleware, validateIdParams, userController.removeUser)
router.delete("/removeAddress", authMiddleware, userController.removeUserAddress)

module.exports = router