const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    username:String,
    email:String,
    website:String,
    phone:Number
});
const User = mongoose.model('userinfos', userSchema);

module.exports=User