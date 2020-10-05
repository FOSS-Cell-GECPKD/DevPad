const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
  },
  html: {
    type: String,
    required: true,
  },
});

module.exports = Post = mongoose.model("post", postSchema);
