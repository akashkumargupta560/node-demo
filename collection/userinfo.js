const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    username:String,
    email:String,
    website:String,
    phone:Number
});
module.export = mongoose.model('userinfos', userSchema);