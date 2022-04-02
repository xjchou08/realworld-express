const express = require("express");
const userCtrl = require("../controller/user");
const userValid = require("../validator/user");
const auth = require('../middleware/auth')

const router = express.Router();

//用户登录
router.post("/login", userValid.login, userCtrl.login);

//用户注册
router.post("/register", userValid.register, userCtrl.register);

//更新当前登录用户
router.put("/user", userCtrl.UpdateCurrentUsr);

//获取当前用户数据
router.get("/user", auth, userCtrl.getCurrentUsr);

module.exports = router;
