const mongoose = require("mongoose")



const productSchema = mongoose.Schema({
    name: { type: String , required:true},
    price:{type:Number, required:true}

})


//creating model 
const Product = mongoose.model("product", productSchema)

module.exports = Product;