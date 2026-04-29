var numbers = [1,2,3,4,5,6,7,8,9,0];
// var operators = ["C", "+", "-", "*", "/", "="];

var btnOne = document.querySelector(".btn-one");
var btnTwo = document.querySelector(".btn-two");
var btnThree = document.querySelector(".btn-three");
var btnFour = document.querySelector(".btn-four");
var btnFive = document.querySelector(".btn-five");
var btnSix = document.querySelector(".btn-six");
var btnSeven = document.querySelector(".btn-seven");
var btnEight = document.querySelector(".btn-eight");
var btnNine = document.querySelector(".btn-nine");
var btnZero = document.querySelector(".btn-zero");

var btnC = document.querySelector(".btn-c");
var btnAdd = document.querySelector(".btn-add");
var btnRemove = document.querySelector(".btn-remove");
var btnTimes = document.querySelector(".btn-times");
var btnDivide = document.querySelector(".btn-divide");
var btnEqual = document.querySelector(".btn-equal");

var btns = document.getElementsByTagName("button");
var display = document.querySelector(".print");

var display = document.querySelector(".print");
var buttons = document.querySelectorAll("button");

var display = document.querySelector(".print");
var buttons = document.querySelectorAll("button");

var display = document.querySelector(".print");
var buttons = document.querySelectorAll("button");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        var value = this.innerText;

        if (value === "C") {
            display.value = "";
        } 
        else if (value === "=") {
            display.value = Function("return " + display.value)();
        } 
        else if (value === "⌫") {
            display.value = display.value.slice(0, -1);
        } 
        else if (value === ".") {
            // ✅ Prevent multiple dots in one number
            let parts = display.value.split(/[\+\-\*\/]/); 
            let lastPart = parts[parts.length - 1];

            if (!lastPart.includes(".")) {
                display.value += ".";
            }
        } 
        else {
            display.value += value;
        }
    });
});
