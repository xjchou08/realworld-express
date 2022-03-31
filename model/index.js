//配置mongoose
const mongoose = require("mongoose");
const { dbUrl } = require("../config/config.default");

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

//连接失败
db.on("error", (err) => {
  console.log("数据库连接失败", err);
});

//连接成功
db.once("open", () => {
  console.log("数据库连接成功");
});

//组织到处模型类
module.exports = {
  User: mongoose.model("User", require("./user")),
  Article: mongoose.model("Article", require("./article")),
};
