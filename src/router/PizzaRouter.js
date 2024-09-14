const router = require("express").Router()
const PizzaController = require("../controller/PizzaController")

router.get("/findById/:id", PizzaController.findPizzaById)
router.get("/findAll", PizzaController.findAllPizzas)
router.post("/create", PizzaController.createPizza)
router.put("/update/:id", PizzaController.updatePizza)
router.patch("/updateAvailability", PizzaController.updateAvailability)
router.delete("/remove/:id", PizzaController.removePizza)

module.exports = router