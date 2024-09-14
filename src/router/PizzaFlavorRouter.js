const router = require("express").Router()
const PizzaFlavorController = require("../controller/PizzaFlavorController")

router.get("/findById/:id", PizzaFlavorController.findPizzaFlavorById)
router.get("/findAll", PizzaFlavorController.findAllPizzaFlavors)
router.post("/create", PizzaFlavorController.createPizzaFlavor)
router.put("/update", PizzaFlavorController.updatePizzaFlavor)
router.patch("/updateAvailability", PizzaFlavorController.updateAvailability)
router.delete("/remove/:id", PizzaFlavorController.removePizzaFlavor)

module.exports = router