const express = require('express');
const { getPosts, setPosts, editPost, likePost, deletePost, dislikePost } = require('../controller/post.controller');
const router = express.Router();

//Routes for the backend using Express's Router
router.get("/", getPosts);

router.post("/", setPosts);

router.put('/:id', editPost);

router.delete('/:id', deletePost);

router.patch("/like-post/:id", likePost);

router.patch("/dislike-post/:id", dislikePost);

module.exports = router;