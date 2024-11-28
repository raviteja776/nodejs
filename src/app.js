// console.log("Main Entry of Node JS Application, Starting a new project");

const express = require("express");
const { connectDB } = require("./config/database");
const User = require("./models/user");
// creating a new web server 
const app = express();

app.use(express.json());

app.post("/signup", async (req,res) => {
    //Creating a new instance of the User Model
    const userObj = new User(req.body);
    try {
        await userObj.save();
    } catch (error) {
        res.status(400).send("Error Saving the user:"+ error.message);        
    }
    res.send("User Data Saved Successfully");
    console.log(req.body);
});

connectDB().then(() => {
    console.log("Data Base connection established");
    
    app.listen(3000,() => {
        console.log("Server is listening on 3000 port successfully");
    });
    
}).catch((err) => {
    console.log("Data Base connection not established");
    
});

