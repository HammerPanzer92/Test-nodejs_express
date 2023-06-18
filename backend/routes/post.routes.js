const express = require('express');
const router = express.Router();

router.get("/", (req, res) =>{
    res.json({message: "Fluffy"})
});

router.post("/", (req, res) =>{
    res.json({message: req.body.message});
})

module.exports = router