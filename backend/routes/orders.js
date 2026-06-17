const express = require("express");

const Order =
require("../models/Order");

const auth =
require("../middleware/auth");

const router =
express.Router();


// Create Order

router.post("/", auth, async(req,res)=>{

    const order =
    new Order({

        user:req.user.id,

        products:req.body.products,

        total:req.body.total

    });

    await order.save();

    res.json({
        message:"Order Placed",
        order
    });

});


// Get Orders

router.get("/", auth, async(req,res)=>{

    const orders =
    await Order.find()
    .populate("user");

    res.json(orders);

});

module.exports = router;