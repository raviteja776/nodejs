// console.log("Main Entry of Node JS Application, Starting a new project");

const express = require("express");

// creating a new web server 
const app = express();


app.listen(3000,() => {
    console.log("Server is listening on 3000 port successfully");
});

app.get("/user", (req,res) => {
    res.send({firstName:"Ravi" ,lastName:"Teja"});
});

app.post("/user", (req,res) => {
    res.send("Data Saved Successfully to the Database");
});

app.patch("/user", (req,res) => {
    res.send("Patch API Updated");
});

app.delete("/user", (req,res) => {
    res.send("Delete API Updated");
});

app.use("/test",(req, res) => {
    res.send("Test Path from the server");
});

app.get("/user/:userId", (req,res)=> {
    //params - req.params,
    //query - req.query
    console.log("Request",req.params, req.query);
    res.send({firstName:"Ravi" ,lastName:"Teja"});
});
