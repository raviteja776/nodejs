// require("./xyz");
// const obj = require("./sum.js");
// const {x,calculateSum}= require("./sum.js");


// import {x,calculateSum} from "./calculate/sum.js";
const {x, calculateSum} = require("./calculate");
var str = "Namaste Node JS";

console.log(str);

// Global Object

// console.log(global);
console.log(globalThis === global);
var z=20;
const a = 10;
const b = 20;

calculateSum(a,b);

console.log(x,z);