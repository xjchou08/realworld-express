const { User } = require("../model");
const jwt = require("../utils/jwt");
const { jwtSecret } = require("../config/config.default");

//用户登录
exports.login = async (req, res, next) => {
  try {
    const user = req.user.toJSON();
    const token = await jwt.sign(
      {
        userId: user._id,
      },
      jwtSecret
    );

    delete user.password;

    res.status(200).json({
      ...user,
      token,
    });
  } catch (err) {
    next(err);
  }
};

//用户注册
exports.register = async (req, res, next) => {
  try {
    //console.log(req.body);
    //数据验证

    let user = new User(req.body.user);

    await user.save(); //保存到数据库中

    user = user.toJSON(); //变成普通的对象

    delete user.password; //不展示出来
  } catch (err) {
    next(err);
  }
};

//获取当前用户
exports.getCurrentUsr = async (req, res, next) => {
  try {    //登录成功的同时获取用户的信息

    res.status(200).json({
      user: req.user,
    });
  } catch (err) {
    next(err);
  }
};

//修改当前登录用户
exports.UpdateCurrentUsr = async (req, res, next) => {
  try {
    res.send("post UpdateCurrentUsr");
  } catch (err) {
    next(err);
  }
};
