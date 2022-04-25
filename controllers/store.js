const express = require("express")
const Club = require("../models/club.js")
const Ball = require("../models/ball.js")
const storeRouter = express.Router()



// Index Route
storeRouter.get("/", (req, res) => {
    res.render("index.ejs")
})

storeRouter.get("/clubs", (req, res) => {
  Club.find({}, (err, allClubs) => {
    res.render("clubsIndex.ejs", { clubs: allClubs });
  })
});

storeRouter.get("/balls", (req, res) => {
    Ball.find({}, (err, allBalls) => {
        res.render("ballsIndex.ejs", { balls: allBalls })
    })
})

// New Route (clubs)
storeRouter.get("/clubs/new", (req, res) => {
    res.render("newClub.ejs")
})

storeRouter.get("/balls/new", (req, res) => {
    res.render("newBall.ejs")
})

// Delete Route
storeRouter.delete("/clubs/:id", (req, res) => {
    Club.findByIdAndDelete(req.params.id, (err, deletedClub) => {
        res.redirect("/store/clubs")
    })
})
storeRouter.delete("/balls/:id", (req, res) => {
    Ball.findByIdAndDelete(req.params.id, (err, deletedBall) => {
        res.redirect("/store/balls")
    })
})
// Update Route

// Create Route
storeRouter.post("/clubs", (req, res) => {
    Club.create(req.body, (err, createdClub) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.redirect("/store/clubs")
        }
    })
})

storeRouter.post("/balls", (req, res) => {
    Ball.create(req.body, (err, createdBall) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.redirect("/store/balls")
        }
    })
})
// Edit Route
storeRouter.get("/clubs/:id/edit", (req, res) => {
    Club.findById(req.params.id, (err, club) => {
        res.render("editClub.ejs", { club })
    })
})

storeRouter.put("/clubs/:id", (req, res) => {
  Club.findByIdAndUpdate(req.params.id, req.body, (err, updatedClub) => {
    if (err) console.log(err);
    res.redirect(`/store/clubs/${req.params.id}`);
  });
});

storeRouter.get("/balls/:id/edit", (req, res) => {
    Ball.findById(req.params.id, (err, ball) => {
        res.render("editBall.ejs", { ball })
    })
})

storeRouter.put("/balls/:id", (req, res) => {
    Ball.findByIdAndUpdate(req.params.id, req.body, (err, updatedBall) => {
        if (err) console.log(err)
        res.redirect(`/store/balls/${req.params.id}`)
    })
})
// Show Route


storeRouter.get("/clubs/:id", (req, res) => {
    Club.findById(req.params.id, (err, club) => {
        res.render("showClub.ejs", { club })
    })
})

storeRouter.get("/balls/:id", (req, res) => {
    Ball.findById(req.params.id, (err, ball) => {
        res.render("showBall.ejs", { ball })
    })
})

module.exports = storeRouter