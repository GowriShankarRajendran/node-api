const express = require('express');
const router = express.Router();


//Get API
router.get("/", (req, res, next) => {
    res.status(200).json({message: 'User All Get API Working'});
});

//Get User API
router.get("/:userID", (req, res, next) => {
    let getUserID = req.params.userID;
    res.status(200).json({message: `User Get API Working ID is ${getUserID}`});
});

//Post API
router.post("/", (req, res, next) => {
    res.status(201).json({message: 'User Post API Working'});
});

//Patch API
router.patch("/:userID", (req, res, next) => {
    let getUserID = req.params.userID;
    res.status(200).json({message: `User Update API Working ID id ${getUserID}`});
});

//Delete API
router.delete("/:userID", (req, res, next) => {
    let getUserID = req.params.userID;
    res.status(200).json({message: `User Delete API Working ID id ${getUserID}`});
});

module.exports = router;