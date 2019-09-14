var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

//home page route
router.get("/", function (req, res) {
    burger.all(function (data) {
        res.render("index", { burgers: data });
    });
});

// route for creating burgers
router.post("/api/burgers", function (req, res) {
    burger.create("burger_name", req.body.name, function (result) {
        res.redirect('back');
    });
});

// route for updating burgers while nesting a variable instead of concatinating 
router.post("/api/burgers/:id", function (req, res) {
    burger.update("devoured", true, `id=${req.params.id}`, function (result) {
        res.redirect('back');
    });
});

module.exports = router;