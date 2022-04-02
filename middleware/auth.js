const { verify } = require("../utils/jwt");
const { jwtSecret } = require("../config/config.default");
const { User } = require("../model");

//验证用户身份、
module.exports = async (req, res, next) => {
  let token = req.headers["authorization"];
  token = token ? token.split("Bearer ")[1] : null;

  if (!token) {
    return res.status(401).end();
  }

  try {
    const decodeToken = await verify(token, jwtSecret);
    req.user = await User.findById(decodeToken.userId);
      
     // console.log(req.user);
    next();
  } catch (err) {
    res.status(401).end();
  }
};
