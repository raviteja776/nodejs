// console.log("Main Entry of Node JS Application, Starting a new project");

const express = require("express");
const { connectDB } = require("./config/database");

// creating a new web server 
const app = express();

connectDB().then(() => {
    console.log("Data Base connection established");
    
    app.listen(3000,() => {
        console.log("Server is listening on 3000 port successfully");
    });
    
}).catch((err) => {
    console.log("Data Base connection not established");
    
});

