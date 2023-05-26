//Imorting Model

const Product = require("../model/product")


const listingController = async (req,res)=>{

    try {
        const {name,price} = req.body;
        const newProduct = new Product({name,price});
        await newProduct.save();
        res.status(201).json({"success":true,"msg":"Listed Successfully",})

        
    } catch (error) {
        console.log(error)
        res.status(500).json({"success":false,"msg":"Something went wroung ",})
        
        
    }

}

module.exports = listingController;