// DEPENDENCIES
const express = require("express")

// DOTENV
const dotenv = require("dotenv")
dotenv.config()

// DATABASE CONNECTION
const connectToDatabase = require("./src/database/database")
connectToDatabase()

// EXPRESS START
const app = express()
const port = 3000

// USAGE OF JSON
app.use(express.json())

// ROUTES DEPENDENCIES
const PizzaRoutes = require("./src/router/PizzaRouter")
const PizzaCrustRoutes = require("./src/router/PizzaCrustRouter")
const PizzaDoughRoutes = require("./src/router/PizzaDoughRouter")
const PizzaFlavorRoutes = require("./src/router/PizzaFlavorRouter")
const PizzaSizeRoutes = require("./src/router/PizzaSizeRouter")

// ROUTES CALLING
app.use("/pizza", PizzaRoutes)
app.use("/pizza/crust", PizzaCrustRoutes)
app.use("/pizza/dough", PizzaDoughRoutes)
app.use("/pizza/flavor", PizzaFlavorRoutes)
app.use("/pizza/size", PizzaSizeRoutes)

// SERVER START
app.listen(port, () => {
    console.log(`O servidor está rodadndo em http://localhost:${port}`)
})