var _ = require('lodash');

console.log(_);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");

function setGradient(){
    body.style.background = 
    "linear-gradient(to right," + color1.value + 
                           ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function randomNumber(){
    var color1Val = "#" + Math.random().toString(16).slice(2, 8);
    var color2Val = "#" + Math.random().toString(16).slice(2, 8);

    body.style.background = 
    "linear-gradient(to right," + color1Val + 
                           ", " + color2Val + ")";

    css.textContent = body.style.background + ";";

    color1.value = color1Val;
    color2.value = color2Val;
}


button.addEventListener("click", randomNumber)
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

