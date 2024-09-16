const router = require("express").Router()
const PizzaSizeController = require("../controller/pizzaSize.controller")
const {auth, adminUser} = require("../middleware/auth.middleware")
const {validateIdParams} = require("../middleware/validation.middleware")

router.get("/findById/:id", validateIdParams, PizzaSizeController.findPizzaSizeById)
router.get("/findAll", PizzaSizeController.findAllPizzaSizes)
router.post("/create", auth, adminUser, PizzaSizeController.createPizzaSize)
router.put("/update/:id", validateIdParams, auth, adminUser, PizzaSizeController.updatePizzaSize)
router.patch("/updateAvailability/:id", validateIdParams, auth, adminUser, PizzaSizeController.updateAvailability)
router.delete("/remove/:id", validateIdParams, auth, adminUser, PizzaSizeController.removePizzaSize)

module.exports = router