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
const PizzaRoutes = require("./src/router/pizza.router")
const PizzaCrustRoutes = require("./src/router/pizzaCrust.router")
const PizzaDoughRoutes = require("./src/router/pizzaDough.router")
const PizzaFlavorRoutes = require("./src/router/pizzaFlavor.router")
const PizzaSizeRoutes = require("./src/router/pizzaSize.router")

// ROUTES CALLING
app.use("/pizza", PizzaRoutes)
app.use("/pizza/crust", PizzaCrustRoutes)
app.use("/pizza/dough", PizzaDoughRoutes)
app.use("/pizza/flavor", PizzaFlavorRoutes)
app.use("/pizza/size", PizzaSizeRoutes)

// SERVER START
app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`)
})