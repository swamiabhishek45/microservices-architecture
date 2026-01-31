const mongoose = require("mongoose");

console.log("hi",process.env.MONGO_URI);


function connect(){
    mongoose.connect("mongodb+srv://swamiabhishek45:12345@cluster0.0nsctbe.mongodb.net/user_services").then(()=>{
        console.log("MONGODB Connected!!");
    }).catch(()=>{
        console.log("MONGODB Connection error");
    })
}

module.exports = connect;