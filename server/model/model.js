const mongoose= require('mongoose');

const schema =new mongoose.Schema({
    Fname:{
        type :String
    },
    Lname:{
        type :String,
        // required :true
    },
    FullName:{
        type :String,
        // required :true
    },
    Email:{
        type: String,
        unique: true,
        required: 'Email address is required'
    },
    DOB: {
        type: Date,
      },
    Age:String,
    Gender:String,
    Hobbies:String,
    Phone: {
        type: Number,
    
    },
    Address:{
        type: String,
        // required: true
    },
    Status:String,
    action:String
})

const Userdb= mongoose.model("users",schema);
console.log("Userdb",Userdb);

module.exports=Userdb;
