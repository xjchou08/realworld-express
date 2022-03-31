/*
    封装数据请求事件
*/

const { User } = require("../model");

//用户登录
exports.login = async (req, res, next) => {
  try {
    //获取请求体数据
    //数据验证
    //验证通过，将数据保存到数据库
    //发送成功响应
    //console.log(111);
    res.status(200).send("post login");
    //res.status(404).send("数据不存在");
  } catch (err) {
    next(err);
  }
};

//用户注册
exports.register = async (req, res, next) => {
  try {
    console.log(req.body);
    //数据验证

    let user = new User(req.body.user);
  //保存到数据库中
    await user.save();

    user = user.toJSON()  //变成普通的对象

    delete user.password;  //不展示出来

    res.status(201).json({
      user,
    });
  } catch (err) {
    next(err);
  }
};

//获取当前用户
exports.getCurrentUsr = async (req, res, next) => {
  try {
    res.send("post login");
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
