"use strict";

console.log("veggie.js loaded");

let topping = require("./topping.js");

var vegPrices = {
	"lettuce": 0.89,
	"guac": 0.95
};

let addVeggie = () => {
    if ($("#veggie-select").val() === "lettuce") {
        return topping.addTopping(vegPrices.lettuce);
    } else if ($("#veggie-select").val() === "guac") {
        return topping.addTopping(vegPrices.guac);
    }
};


module.exports = {addVeggie};