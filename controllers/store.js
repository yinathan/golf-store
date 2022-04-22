const express = require("express")
const Club = require("../models/club.js")
const storeRouter = express.Router()


// Index Route
storeRouter.get("/", (req, res) => {
    res.render("index.ejs")
})

// New Route
storeRouter.get("/new", (req, res) => {
    res.render("new.ejs")
})

// Delete Route
storeRouter.delete("/clubs/:id", (req, res) => {
    Club.findByIdAndDelete(req.params.id, (err, deletedClub) => {
        res.redirect("/store/clubs")
    })
})

// Update Route
storeRouter.put("/clubs/:id", (req, res) => {
    Club.findByIdAndUpdate(req.params.id, req.body, (err, updatedClub) => {
        if(err) console.log(err)
        res.redirect(`/products/${req.params.id}`)
    })
})
// Create Route
storeRouter.post("/", (req, res) => {
    Club.create(req.body, (err, createdClub) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.redirect("/store/clubs")
        }
    })
})

// Edit Route
storeRouter.get("/clubs/:id/edit", (req, res) => {
    Club.findById(req.params.id, (err, club) => {
        res.render("edit.ejs", { club })
    })
})

// Show Route
storeRouter.get("/clubs", (req, res) => {
    res.render("show.ejs", { club })
})

module.exports = storeRouter