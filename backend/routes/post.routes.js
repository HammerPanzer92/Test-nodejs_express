const express = require('express');
const router = express.Router();

//Routes for the backend using Express's Router
router.get("/", (req, res) =>{
    res.json({message: "Fluffy"})
});

router.post("/", (req, res) =>{
    res.json({message: req.body.message});
});

router.put('/:id', (req, res) =>{
    res.json({ messageId: req.params.id});
});

router.delete('/:id', (req, res) =>{
    res.json({message: "Pégus " + req.params.id + " a disparu"})
});

router.patch("/like-post/:id", (req, res) =>{
    res.json({message : "Everyone loves fluffy tail of kitsune " + req.params.id})
});

module.exports = router;