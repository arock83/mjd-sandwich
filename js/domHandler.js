"use strict";

console.log("domHandler.js loaded");

var finalSandwichPrice = 0;
var selectedTopping;

let meat=require("./meat.js");
let bread=require("./bread.js");
let cheese=require("./cheese.js");
let condiment=require("./condiment.js");
let veggie=require("./veggie.js");

$("#meat-chooser").on("change", function(event) {
	selectedTopping=event.target.value;
	meat.addMeat(selectedTopping);
});

$("#bread-chooser").on("change", function(event) {
	selectedTopping=event.target.value;
	bread.addBread(selectedTopping);
});

$("#cheese-select").on("change", function(event) {
	selectedTopping = event.target.value;
	cheese.addCheese(selectedTopping);
});

$("#condiment-select").on("change", function(event) {
	selectedTopping = event.target.value;
	condiment.addCondiment(selectedTopping);
});

$("#veggie-select").on("change", function(event) {
	selectedTopping = event.target.value;
	veggie.addVeggie(selectedTopping);
});
