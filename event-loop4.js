const { log } = require("console");
const fs = require("fs");

setImmediate(() => log("Immediate check Phase"));
setTimeout(() => log("Timer Phase"), 0);
Promise.resolve("Resolve").then((data) => log(data));
fs.readFile("./file.txt", "utf8", (err,data) => {
    log("File Read Phase", data);
});
process.nextTick(() => {
    process.nextTick(() => log("inner nextTick"));
    Promise.resolve("Next Resolve").then((dt) => log(dt));
    log("nextTick");
});

log("Last Line of the program");

//Last Line of the program
//nextTick
//inner nextTick
//Resolve
//Timer Phase
//Immediate check phase
//File Read Phase
