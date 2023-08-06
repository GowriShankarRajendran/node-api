const express = require('express');
const router = express.Router();

//Get Order
router.get("/", (req, res, next) => {
    let sendData = `Order All Get API Wroking`;
    res.status(200).json({message: sendData});
});

//Get Order ID
router.get("/:orderID", (req, res, next) => {
    let getOrderID = req.params.orderID;
    let sendData = `Order Get API Wroking ID ${getOrderID}`;
    res.status(200).json({message: sendData});
});

//Post Order
router.post("/", (req, res, next) => {
    let sendData = `Order Post API Wroking`;
    res.status(200).json({message: sendData});
});

//Update Order
router.patch("/:orderID", (req, res, next) => {
    let getOrderID = req.params.orderID;
    let sendData = `Order Update API Wroking ID ${getOrderID}`;
    res.status(200).json({message: sendData});
});

//Delete Order
router.delete("/:orderID", (req, res, next) => {
    let getOrderID = req.params.orderID;
    let sendData = `Order Delete API Wroking ID ${getOrderID}`;
    res.status(200).json({message: sendData});
});

module.exports = router;