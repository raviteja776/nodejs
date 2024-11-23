const fs = require("fs");

const https = require("https");

const crypto = require("crypto");

console.log("Async Operation");

//Password Based key derivative function 
crypto.pbkdf2("hello world password sync", "salt", 50000,50,"sha512",(err,key) => {
    console.log("Key is generated", key);
});

setTimeout(() => {
    console.log("Set Time out after 0 secs");
},0);

const synckey = crypto.pbkdf2Sync("hello world password","salt",50000000,50,"sha512");
console.log("sync Key:", synckey);

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Http Result fetched Successfully");
});

setTimeout(() => {
    console.log("Set Time out after 5 secs");
},5000);

//Async
fs.readFile("./file.txt", "utf8", (err,data) => {
    console.log("File Data:", data);
});

//Synchronous
const fileContent = fs.readFileSync("./file.txt","utf8");
console.log("File Sync Content", fileContent);