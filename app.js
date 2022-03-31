const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router/index.js");
const errorHandler = require("./middleware/error-handler");
require("./model");

//日志输出
app.use(morgan("dev"));

app.use(cors());

//解析请求体
app.use(express.json());

const PORT = process.env.PORT | 3000;

router.get("/hello", (req, res) => {
  res.status(200).send("111");
});

//挂载路由
app.use("/api", router);

//挂载统一服务端错误中间件
app.use(errorHandler());

app.listen(3000, () => {
  console.log("server running at localhost:3000/");
});
