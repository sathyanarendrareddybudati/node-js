const mongoose = require('mongoose');
const productSchema= mongoose.Schema({
    name:String,
    gender:String,
});

module.exports= mongoose.model("items",productSchema);