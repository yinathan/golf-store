require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const storeController = require("./controllers/store")


// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

app.use("/store", storeController)

// Mongoose Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongoose connected"));
db.on("disconnected", () => console.log("mongo disconnected"));


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`You are listening on Port ${PORT}`)
})