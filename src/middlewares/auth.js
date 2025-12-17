const auth = (req, res, next) => {
  let token = "xyzn";
  if (token === "xyz") {
    res.send("hi from 1");
  } else {
    next();
  }
};
module.exports = {
    auth
}
