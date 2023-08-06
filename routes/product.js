const express = require('express');
const router = express.Router();

//Get Product
router.get("/", (req, res, next) => {
    let sendData = `Product All Get API Working`;
    res.status(200).json({message: sendData});
});

//Get Product ID
router.get("/:productID", (req, res, next) => {
    let getProductID = req.params.productID
    let sendData = `Product Get API Working ID ${getProductID}`;
    res.status(200).json({message: sendData});
});

//Post Product
router.post("/", (req, res, next) => {
    let sendData = `Product Post API Working`;
    res.status(200).json({message: sendData});
});

//Update Product
router.patch("/:productID", (req, res, next) => {
    let getProductID = req.params.productID
    let sendData = `Product Update API Working ID ${getProductID}`;
    res.status(200).json({message: sendData});
});

//Delete Product
router.delete("/:productID", (req, res, next) => {
    let getProductID = req.params.productID
    let sendData = `Product Delete API Working ID ${getProductID}`;
    res.status(200).json({message: sendData});
});

module.exports = router;