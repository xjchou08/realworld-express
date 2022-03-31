const express = require("express");
const tagsCtrl = require('../controller/tags')

const router = express.Router();

//获取个人信息 profile
router.get("/", tagsCtrl.getProfile);

module.exports = router;
