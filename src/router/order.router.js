const router = require("express").Router()

const orderController = require("../controller/order.controller")
const pagination = require("../middleware/pagination.middleware")
const {auth, adminUser} = require("../middleware/auth.middleware")
const {validateIdParams} = require("../middleware/validation.middleware")

router.get("/findById/:id", auth, validateIdParams, orderController.findOrderById)
router.get("/find", auth, orderController.findAllOrders)
router.get("/findAll", auth, adminUser, orderController.findAllUsersOrders)
router.post("/create", orderController.createOrder)
router.patch("/updateStatus/:id", orderController.updateStatus)

module.exports = router