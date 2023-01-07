const express = require("express");
const { Comment, Post, Image, User, Hashtag } = require("../models");
const { isLoggedIn } = require("./middleware");

const router = express.Router();

router.post("/:postId/comment", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.postId,
      },
    });

    if (!post) return res.status(403).send("존재하지 않는 게시물입니다");

    await Comment.create({
      content: req.body.content,
      UserId: req.user.id,
      PostId: req.params.postId,
    });

    res.status(201).send("댓글을 생성했습니다");
  } catch (err) {
    next(err);
  }
});

module.exports = router;