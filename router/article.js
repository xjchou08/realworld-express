const express = require("express");
const articleCtrl = require("../controller/article");
const auth = require("../middleware/auth");

const router = express.Router();

//获取文章清单
router.get("/", auth, articleCtrl.getArticle);

//获取文章清单
router.get("/feed", articleCtrl.getArticleFeed);

//获取文章清单
router.get("/:slug", articleCtrl.getCmt);

//删除评论
router.delete("/:slug/comments", articleCtrl.deleteCmt);

//删除文章
router.delete("/:slug/comments/:id", articleCtrl.deleteCmtId);

//最喜欢的文章
router.post("/:slug/favorite", articleCtrl.favoriteArticle);

//删除最喜欢的文章
router.delete("/:slug/favorite", articleCtrl.unFavoriteArticle);

module.exports = router;
