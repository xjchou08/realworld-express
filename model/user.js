//对接user数据
const mongoose = require("mongoose");
const baseModel = require("./base-model");
const md5 = require("../utils/md5");

const userSchema = new mongoose.Schema({
  ...baseModel,
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: (value) => md5(value),
    select: false, //不被查看
  },
  email: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: null, //默认值
  },
  image: {
    type: String,
    default: null,
  },
  /*following: {
    type: Boolean,
    require: true,
  },*/
});

module.exports = userSchema;
