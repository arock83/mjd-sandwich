"use strict";

console.log("bread.js loaded");

let topping = require("./topping.js");

var breadPrices = {
	"white": 0.89,
	"wheat": 0.95
};

let addBread = () => {
	if ($("#bread-chooser").val() === "white") {
      return topping.addTopping(breadPrices.white);
    } else if ($("#bread-chooser").val() === "wheat") {
      return topping.addTopping(breadPrices.wheat);
    }
};

module.exports = {addBread};