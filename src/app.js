// console.log("Main Entry of Node JS Application, Starting a new project");

const express = require("express");
const { connectDB } = require("./config/database");
const User = require("./models/user");
// creating a new web server 
const app = express();

app.post("/signup", async (req,res) => {
    const userObj = new User({
        firstName:"Hari",
        lastName : "Lahari",
        emailId:"hariteja4.7.20@gmail.com",
        password:"123456",
        age:31,
        gender:"FeMale"
    });
    try {
        await userObj.save();
    } catch (error) {
        res.status(400).send("Error Saving the user:"+ error.message);        
    }
    res.send("User Data Saved Successfully");
});

connectDB().then(() => {
    console.log("Data Base connection established");
    
    app.listen(3000,() => {
        console.log("Server is listening on 3000 port successfully");
    });
    
}).catch((err) => {
    console.log("Data Base connection not established");
    
});

