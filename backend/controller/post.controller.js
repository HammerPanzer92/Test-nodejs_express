const postModel = require("../models/post.model");

/**
 * return all the posts
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getPosts = async (req, res) => {
  const posts = await postModel.find();
  res.status(200).json(posts);
};

/**
 * Create a new posts (using data in the request)
 * @param {*} req 
 * @param {*} res 
 */
module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Merci d'ajouter un message" });
  }

  const post = await postModel.create({
    message: req.body.message,
    author: req.body.author,
  });
  res.status(200).json(post);
};

/**
 * Modify a post
 * @param {*} req 
 * @param {*} res 
 */
module.exports.editPost = async (req, res) => {
  const post = await postModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  const updatePost = await postModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });

  res.status(200).json(updatePost);
};

/**
 * Delete a post from the database
 * @param {*} req 
 * @param {*} res 
 */
module.exports.deletePost = async (req, res) => {
  const post = await postModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }
  await post.deleteOne({ _id: post })
  res.status(200).json("Message supprimé " + req.params.id);
};

/**
 * Add a new liker to a post
 * @param {*} req 
 * @param {*} res 
 */
module.exports.likePost = async (req, res) => {
  try {
    await postModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};

/**
 * Delete a liker from a post
 * @param {*} req 
 * @param {*} res 
 */
module.exports.dislikePost = async (req, res) => {
  try {
    await postModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (err) {
    res.status(400).json(err);
  }
};