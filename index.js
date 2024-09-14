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

// SERVER START
app.listen(port, () => {
    console.log(`O servidor está rodadndo em http://localhost:${port}`)
})