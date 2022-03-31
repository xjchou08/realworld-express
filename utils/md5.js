const crypto = require("crypto");

module.exports = (str) => {
 // const randomStr = Math.random().toString().slice(2, 5); //3位随机
  return crypto
    .createHash("md5")
    .update("jiami"+ str)  //合成字符串进行加密
    .digest("hex");
};
