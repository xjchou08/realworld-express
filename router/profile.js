const express = require("express");
const router = express.Router();

//获取个人信息 profile
router.get("/:username", async (req, res, next) => {
  try {
    res.send(`get user ${req.params.username}`);
  } catch (err) {
    next(err);
  }
});


//关注用户
router.post('/:username/follow', async (req, res, next) => {
    try {
        res.send('post  follow')
    } catch (err) {
        next(err)
    }
})

//取关用户
router.delete("/:username/follow", async (req, res, next) => {
  try {
    res.send("post  follow");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
