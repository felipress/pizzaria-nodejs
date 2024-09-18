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
const docsRoutes = require("./src/router/docs.router")

// ROUTES CALLING
app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/product/pizza", pizzaRoutes)
app.use("/product/pizza/crust", pizzaCrustRoutes)
app.use("/product/pizza/dough", pizzaDoughRoutes)
app.use("/product/pizza/flavor", pizzaFlavorRoutes)
app.use("/product/pizza/size", pizzaSizeRoutes)
app.use("/product/sideDish", sideDishRoutes)
app.use("/cart", cartRoutes)
app.use("/order", orderRoutes)
app.use("/docs", docsRoutes)

// SERVER START
app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`)
})