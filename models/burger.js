// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var mysql = require("mysql")

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", cb);
    },
    create: function (col, val, cb) {
        orm.insertOne("burgers", col, val, cb)
    },
    update: function (col, val, condition, cb) {
        orm.updateOne("burgers", col, val, condition, cb)
    }
};

// Export the database functions for the controller (burgers.js).
module.exports = burger;