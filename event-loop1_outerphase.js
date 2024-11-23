const fs = require("node:fs");

const a = 100;

fs.readFile("./file.txt","utf8",(err, data) => {
    console.log("File Output:", data);
});

setTimeout(() => {
    console.log("Timer Output");
}, 0);

setImmediate(() => {
    console.log("Check Phase Output");
});

function printA() {
    console.log(a);
}

printA();

console.log("Last Line of the program");

// 100
// Last Line of the program
// Timer output
// Check Phase Output
// File Output