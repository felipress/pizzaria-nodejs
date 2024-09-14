const router = require("express").Router()
const PizzaSizeController = require("../controller/PizzaSizeController")

router.get("/findById/:id", PizzaSizeController.findPizzaSizeById)
router.get("/findAll", PizzaSizeController.findAllPizzaSizes)
router.post("/create", PizzaSizeController.createPizzaSize)
router.put("/update", PizzaSizeController.updatePizzaSize)
router.patch("/updateAvailability", PizzaSizeController.updateAvailability)
router.delete("/remove/:id", PizzaSizeController.removePizzaSize)

module.exports = router