const express = require("express");

const Product =
require("../models/Product");

const router =
express.Router();


// Get All Products

router.get("/", async(req,res)=>{

    const products =
    await Product.find();

    res.json(products);

});


// Add Product

router.post("/", async(req,res)=>{

    const product =
    new Product(req.body);

    await product.save();

    res.json({
        message:"Product Added"
    });

});


// Delete Product

router.delete("/:id", async(req,res)=>{

    await Product.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message:"Product Deleted"
    });

});

module.exports = router;