exports.getProfile = async (req, res, next) => {
  try {
    res.send("get profiles");
  } catch (err) {
    next(err);
  }
};
