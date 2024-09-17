const router = require("express").Router()
const cartController = require("../controller/cart.controller")
const {validateIdParams} = require("../middleware/validation.middleware")
const {auth} = require("../middleware/auth.middleware")

router.get("/findById/:id", validateIdParams, cartController.findCartById)
router.get("/findAll", cartController.findAllCarts)
router.post("/create", auth, cartController.createCart)
router.put("/update/:id", cartController.updateCart)
router.delete("/remove/:id", cartController.removeCart)

module.exports = router