const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kirtsugue:REKxnjunOknu1N8D@cluster0.pzy0u14.mongodb.net/Vozify");

const User = mongoose.model("Users" ,{name:String,email:String,password:String});

module.exports = User;