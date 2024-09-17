const router = require("express").Router()
const PizzaController = require("../controller/pizza.controller")
const {validateIdParams} = require("../middleware/validation.middleware")
const {auth, adminUser} = require("../middleware/auth.middleware")

router.get("/findById/:id", validateIdParams, PizzaController.findPizzaById)
router.get("/findAll", PizzaController.findAllPizzas)
router.post("/create", auth, PizzaController.createPizza)
router.put("/update/:id", auth, validateIdParams, PizzaController.updatePizza)
router.patch("/updateAvailability/:id", auth, adminUser, validateIdParams, PizzaController.updateAvailability)
router.delete("/remove/:id", auth, validateIdParams, PizzaController.removePizza)

module.exports = router