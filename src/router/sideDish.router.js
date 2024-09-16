const router = require("express").Router()
const SideDishController = require("../controller/sideDish.controller")
const pagination = require("../middleware/pagination.middleware")
const {auth, adminUser} = require("../middleware/auth.middleware")
const {validateIdParams} = require("../middleware/validation.middleware")

router.get("/findById/:id", validateIdParams, SideDishController.findSideDishById)
router.get("/findAll", pagination, SideDishController.findAllSideDishes)
router.post("/create", SideDishController.createSideDish)
router.put("/update/:id", validateIdParams, SideDishController.updateSideDish)
router.patch("/updateAvailabiity/:id", validateIdParams, SideDishController.updateAvailability)
router.delete("/remove/:id", validateIdParams, SideDishController.removeSideDish)

module.exports = router