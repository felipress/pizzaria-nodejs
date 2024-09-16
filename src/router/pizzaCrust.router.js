const router = require("express").Router()
const PizzaCrustController = require("../controller/pizzaCrust.controller")
const {auth, adminUser} = require("../middleware/auth.middleware")
const {validateIdParams} = require("../middleware/validation.middleware")

router.get("/findById/:id", validateIdParams, PizzaCrustController.findPizzaCrustById)
router.get("/findAll", PizzaCrustController.findAllPizzaCrusts)
router.post("/create", auth, adminUser, PizzaCrustController.createPizzaCrust)
router.put("/update/:id", validateIdParams, auth, adminUser, PizzaCrustController.updatePizzaCrust)
router.patch("/updateAvailability/:id", validateIdParams, auth, adminUser, PizzaCrustController.updateAvailability)
router.delete("/remove/:id", validateIdParams, auth, adminUser, PizzaCrustController.removePizzaCrust)

module.exports = router