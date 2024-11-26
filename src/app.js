// console.log("Main Entry of Node JS Application, Starting a new project");

const express = require("express");
const { adminAuth } = require("./middleware/auth");

// creating a new web server 
const app = express();


app.listen(3000,() => {
    console.log("Server is listening on 3000 port successfully");
});
/*
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
*/
//app.use("/routePath", [rh1,rh2,rh3,rh4]);

app.use("/", (err,req,res,next) => {
    if(err) {
        res.status(500).send("Something went wrong Pre Before");
    }
});

app.use("/admin", adminAuth);

app.get("/admin/1", (req,res,next) => {
    console.log("Response handled 1");
    next();

    //  res.send("Response 1 !!");
},[(req,res,next) => {
    console.log("Response handled 1a");
    next();

    //  res.send("Response 1 !!");
},
(req,res) => {
    console.log("Response handled 2a");
    // res.send("Response 2a !!");
    try {
        throw new Error("abcd");
    } catch (error) {
        res.status(500).send("Contact support team");
    }
}]);

// Last place to handle errors
app.use("/", (err,req,res,next) => {
    if(err) {
        res.status(500).send("Something went wrong Post error");
    }
});