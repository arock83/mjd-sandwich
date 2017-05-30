"use strict";

console.log("meat.js loaded");

let topping = require("./topping.js");

var meatPrices = {
	"ham": 0.89,
	"turkey": 0.95,
	"steak": 1.23
};

let addMeat = () => {
    if ($("#meat-chooser").val() === "ham") {
        return topping.addTopping(meatPrices.ham);
    } else if ($("#meat-chooser").val() === "turkey") {
        return topping.addTopping(meatPrices.turkey);
    } else if ($("#meat-chooser").val() === "steak") {
        return topping.addTopping(meatPrices.steak);
    }
};

module.exports = {addMeat};