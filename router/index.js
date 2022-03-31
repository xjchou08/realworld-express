const express = require("express");
const router = express.Router();

//用戶相关
router.use("/user", require("./user"));

//用户资料相关
router.use("/profiles", require("./profile"));

//文章相关
//router.use("/articles", require("./article"));
router.use("/article", require("./article"));

//标签相关
router.use("/tags", require("./tags"));

module.exports = router;
