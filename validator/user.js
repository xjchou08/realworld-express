//用户信息验证
const { body } = require("express-validator");
const { User } = require("../model");
const validate = require("../middleware/validate");
const md5 = require("../utils/md5");

//注册数据验证
exports.register = validate([
  //配置验证规则
  body("user.username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .custom(async (username) => {
      const user = await User.findOne({ username });
      if (user) {
        return Promise.reject("用户名已存在");
      }
    }),

  body("user.password").notEmpty().withMessage("密码不能为空"),

  body("user.email")
    .notEmpty()
    .withMessage("邮箱不能为空")
    .isEmail()
    .withMessage("邮箱格式不正确")
    .bail()
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        return Promise.reject("邮箱已注册过");
      }
    }),
]);

// 登录数据验证

exports.login = [
  //验证通过才走下一个
  validate([
    body("user.email").notEmpty().withMessage("邮箱不能为空"),

    body("user.password").notEmpty().withMessage("请填写密码"),
  ]),

  validate([
    //验证通过  todo
    body("user.email").custom(async (email, { req }) => {
      //验证是否存在
      const user = await User.findOne({ email }).select([
        "username",
        "email",
        "bio",
        "image",
        "password",
      ]); //选择数据属性
      if (!user) {
        return Promise.reject("该用户不存在，请先注册");
      }
      req.user = user;
    }),
  ]),
  validate([
    body("user.password").custom(async (password, { req }) => {
      //对比输入的密码是否与数据库中存储相同
      //要通过特定的id-email查询密码
      console.log(md5(password));
      console.log(req.user.password);

      if (md5(password) !== req.user.password) {
        return Promise.reject("密码输入不正确");
      }
    }),
  ]),
];
