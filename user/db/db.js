const mongoose = require("mongoose");

function connect(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("MONGODB Connected!!");
    }).catch(()=>{
        console.log("MONGODB Connection error");
    })
}

module.exports = connect;