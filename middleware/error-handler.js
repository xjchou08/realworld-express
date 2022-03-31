const util = require("util");

//服务端错误处理器
//500 服务端错误

module.exports = () => {
  return (err, req, res, next) => {
    res.status(500).json({
      error: util.format(err), //这个有程序的全部信息，不安全
    });
  };
};
