// console.log("Main Entry of Node JS Application, Starting a new project");

const express = require("express");

// creating a new web server 
const app = express();


app.listen(3000,() => {
    console.log("Server is listening on 3000 port successfully");
});

app.use("/test",(req, res) => {
    res.send("Test Path from the server");
});

app.use("/hello",(req, res) => {
    res.send("Hello Path from the server");
});