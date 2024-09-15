const router = require("express").Router()
const PizzaDoughController = require("../controller/pizzaDough.controller")

router.get("/findById/:id", PizzaDoughController.findPizzaDoughById)
router.get("/findAll", PizzaDoughController.findAllPizzaDoughs)
router.post("/create", PizzaDoughController.createPizzaDough)
router.put("/update/:id", PizzaDoughController.updatePizzaDough)
router.patch("/updateAvailability/:id", PizzaDoughController.updateAvailability)
router.delete("/remove/:id", PizzaDoughController.removePizzaDough)

module.exports = router