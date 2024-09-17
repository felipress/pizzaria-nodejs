const router = require("express").Router()
const shoppingCartController = require("../controller/shoppingCart.controller")
const {validateIdParams} = require("../middleware/validation.middleware")
const {auth} = require("../middleware/auth.middleware")

router.get("/findById/:id", validateIdParams, shoppingCartController.findShoppingCartById)
router.get("/findAll", shoppingCartController.findAllShoppingCarts)
router.post("/create", auth, shoppingCartController.createShoppingCart)
router.put("/update/:id", shoppingCartController.updateShoppingCart)
router.delete("/remove/:id", shoppingCartController.removeShoppingCart)

module.exports = router