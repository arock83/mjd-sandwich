"use strict";

console.log("topping.js loaded");

var totalPrice = 0;

let addTopping = (toppingPrice) => {
    totalPrice += toppingPrice;
    console.log("running total", totalPrice);
    $("#priceTotal").html(totalPrice.toFixed(2));
};

module.exports = {addTopping};