"use strict";

console.log("condiment.js loaded");

let topping = require("./topping.js");

var condimentPrices = {
	"mustard": 0.89,
	"pickle": 0.95,
	"shiracha": 1.23
};

let addCondiment = () => {
	if ($("#condiment-select").val() === "mustard") {
        return topping.addTopping(condimentPrices.mustard);
    } else if ($("#condiment-select").val() === "pickle") {
        return topping.addTopping(condimentPrices.pickle);
    } else if ($("#condiment-select").val() === "shiracha") {
        return topping.addTopping(condimentPrices.shiracha);
    }
};

module.exports = {addCondiment};