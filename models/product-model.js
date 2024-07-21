const mongoose = require("mongoose");

const productSchema = mongoose.connect({
image:String,
name:String,
pirce:Number,
discount:{
    type:Number,
    default:0,
},
bgcolor:String,
panelcolor:String,
textcolor:String,

});

module.exports = mongoose.model('product',productSchema);