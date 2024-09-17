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
const pizzaRoutes = require("./src/router/pizza.router")
const pizzaCrustRoutes = require("./src/router/pizzaCrust.router")
const pizzaDoughRoutes = require("./src/router/pizzaDough.router")
const pizzaFlavorRoutes = require("./src/router/pizzaFlavor.router")
const pizzaSizeRoutes = require("./src/router/pizzaSize.router")
const sideDishRoutes = require("./src/router/sideDish.router")
const cartRoutes = require("./src/router/cart.router")
const orderRoutes = require("./src/router/order.router")

// ROUTES CALLING
app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/pizza", pizzaRoutes)
app.use("/pizza/crust", pizzaCrustRoutes)
app.use("/pizza/dough", pizzaDoughRoutes)
app.use("/pizza/flavor", pizzaFlavorRoutes)
app.use("/pizza/size", pizzaSizeRoutes)
app.use("/sideDish", sideDishRoutes)
app.use("/cart", cartRoutes)
app.use("/order", orderRoutes)

// SERVER START
app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`)
})