const express = require("express")
const Club = require("../models/club.js")
const storeRouter = express.Router()

storeRouter.get("/", (req, res) => {
    res.send("working")
})




module.exports = storeRouter