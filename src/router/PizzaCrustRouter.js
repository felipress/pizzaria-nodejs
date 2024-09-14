const router = require("express").Router()
const PizzaCrustController = require("../controller/PizzaCrustController")

router.get("/findById/:id", PizzaCrustController.findPizzaCrustById)
router.get("/findAll", PizzaCrustController.findAllPizzaCrusts)
router.post("/create", PizzaCrustController.createPizzaCrust)
router.put("/update/:id", PizzaCrustController.updatePizzaCrust)
router.patch("/updateAvailability/:id", PizzaCrustController.updateAvailability)
router.delete("/remove/:id", PizzaCrustController.removePizzaCrust)

module.exports = router