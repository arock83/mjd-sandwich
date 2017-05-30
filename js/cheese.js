"use strict";

console.log("cheese.js loaded");

let topping = require("./topping.js");

var cheesePrices = {
	"chedder": 0.89,
	"swiss": 0.95,
	"pJack": 1.23
};

let addCheese = () => {
    if ($("#cheese-select").val() === "chedder") {
        return topping.addTopping(cheesePrices.chedder);
    } else if ($("#cheese-select").val() === "swiss") {
        return topping.addTopping(cheesePrices.swiss);
    } else if ($("#cheese-select").val() === "pJack") {
        return topping.addTopping(cheesePrices.pJack);
    }
};

module.exports = {addCheese};