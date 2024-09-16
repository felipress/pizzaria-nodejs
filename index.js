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
const authRoutes = require("./src/router/auth.router")
const userRoutes = require("./src/router/user.router")
const PizzaRoutes = require("./src/router/pizza.router")
const PizzaCrustRoutes = require("./src/router/pizzaCrust.router")
const PizzaDoughRoutes = require("./src/router/pizzaDough.router")
const PizzaFlavorRoutes = require("./src/router/pizzaFlavor.router")
const PizzaSizeRoutes = require("./src/router/pizzaSize.router")
const SideDishRoutes = require("./src/router/sideDish.router")

// ROUTES CALLING
app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/pizza", PizzaRoutes)
app.use("/pizza/crust", PizzaCrustRoutes)
app.use("/pizza/dough", PizzaDoughRoutes)
app.use("/pizza/flavor", PizzaFlavorRoutes)
app.use("/pizza/size", PizzaSizeRoutes)
app.use("/sideDish", SideDishRoutes)

// SERVER START
app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`)
})