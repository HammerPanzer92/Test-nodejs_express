const mongoose = require("mongoose");

//Define a data
const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    likers: {
      type: [String],
    },
  },
  {
    //Add a date of creation and modification
    timestamp: true,
  }
);

// !! IMPORTANT : don't forget to call mongoose.model
module.exports = mongoose.model("post", postSchema);