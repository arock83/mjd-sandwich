(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./topping.js":7}],2:[function(require,module,exports){
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
},{"./topping.js":7}],3:[function(require,module,exports){
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
},{"./topping.js":7}],4:[function(require,module,exports){
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

},{"./bread.js":1,"./cheese.js":2,"./condiment.js":3,"./meat.js":6,"./veggie.js":8}],5:[function(require,module,exports){

},{}],6:[function(require,module,exports){
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
},{"./topping.js":7}],7:[function(require,module,exports){
"use strict";

console.log("topping.js loaded");

var totalPrice = 0;

let addTopping = (toppingPrice) => {
    totalPrice += toppingPrice;
    console.log("running total", totalPrice);
    $("#priceTotal").html(totalPrice.toFixed(2));
};

module.exports = {addTopping};
},{}],8:[function(require,module,exports){
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
},{"./topping.js":7}]},{},[1,2,3,4,5,6,7,8]);
