const express = require("express");
const router = express.Router();
const Post = require("../models/postModel");
const authenticate = require("../authenticate");

router.post("/", authenticate.verifyUser,async (req, res) => {
  const data = req.body;
  const newPost = Post(data);
  await newPost.save((error) => {
    if (error) {
      res.json({ msg: error });
      return;
    } else {
      return res.json({
        msg: "successfully saved !!!",
      });
    }
  });
});

router.get("/", async (req, res) => {
  const data = await Post.find();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const data = await Post.findOne({ _id: req.params.id });
  res.json(data);
});

module.exports = router;
