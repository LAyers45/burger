var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

//home page route
router.get("/", function(req, res){
    buger.all(function(data){
        res.render("index", {burgers: data});
    });
});

// route for creating burgers
router.get("/api/burgers", function(req, res){
    buger.create("burger_name", req.body.name, function(result){
        res.redirect('back');
    });
});

// route for updating burgers while nesting a variable instead of concatinating 
router.get("/api/burgers:id", function(req, res){
    buger.update("devoured", true, "id = ${req.body.name}", function(result){
        res.redirect('back');
    });
});

module.exports = router