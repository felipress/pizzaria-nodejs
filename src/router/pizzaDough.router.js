const router = require("express").Router()
const PizzaDoughController = require("../controller/pizzaDough.controller")
const {auth, adminUser} = require("../middleware/auth.middleware")
const {validateIdParams} = require("../middleware/validation.middleware")

router.get("/findById/:id", validateIdParams, PizzaDoughController.findPizzaDoughById)
router.get("/findAll", PizzaDoughController.findAllPizzaDoughs)
router.post("/create", auth, adminUser, PizzaDoughController.createPizzaDough)
router.put("/update/:id", validateIdParams, auth, adminUser, PizzaDoughController.updatePizzaDough)
router.patch("/updateAvailability/:id", validateIdParams, auth, adminUser, PizzaDoughController.updateAvailability)
router.delete("/remove/:id", validateIdParams, auth, adminUser, PizzaDoughController.removePizzaDough)

module.exports = router