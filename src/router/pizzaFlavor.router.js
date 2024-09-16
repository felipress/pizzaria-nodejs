const router = require("express").Router()
const PizzaFlavorController = require("../controller/pizzaFlavor.controller")
const {auth, adminUser} = require("../middleware/auth.middleware")
const {validateIdParams} = require("../middleware/validation.middleware")

router.get("/findById/:id", validateIdParams, PizzaFlavorController.findPizzaFlavorById)
router.get("/findAll", PizzaFlavorController.findAllPizzaFlavors)
router.post("/create", auth, adminUser, PizzaFlavorController.createPizzaFlavor)
router.put("/update/:id", validateIdParams, auth, adminUser, PizzaFlavorController.updatePizzaFlavor)
router.patch("/updateAvailability/:id", validateIdParams, auth, adminUser, PizzaFlavorController.updateAvailability)
router.delete("/remove/:id", validateIdParams, auth, adminUser, PizzaFlavorController.removePizzaFlavor)

module.exports = router