const { log } = require("console");
const fs = require("fs");

setImmediate(() => console.log("setImmediate check Phase"));
setTimeout(() => log("Timer Phase"), 0);
Promise.resolve("Promise Phase").then((res) => log(res));


fs.readFile("./file.txt","utf8",(err, data) => {
    log("File Output:", data);
    setTimeout(() => log("2nd Timer"), 0);
    process.nextTick(() => log("2nd next tick"));
    setImmediate(() => log("2nd set Immediate check"));
});

process.nextTick(() => console.log("Process next Tick"));


log("Last Line of the program");

//Last Line of the program
//Process next Tick
//Promise Phase

//Timer Phase

//setImmediate check phase
//File Output:data

//2nd nextTick
//2nd Timer
//2nd set Immediate check