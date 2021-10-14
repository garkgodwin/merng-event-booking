const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.users;
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  //!set all empty
  req.isAuth = false;
  req.userType = false;
  req.userId = "";
  req.email = "";
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split("Bearer ")[1];
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, SECRET_KEY);
  } catch (error) {
    req.isAuth = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }

  await User.findOne({ id: decodedToken.userId, email: decodedToken.email })
    .then((result) => {
      if (!result) {
        req.isAuth = false;
        return next();
      } else {
        req.isAuth = true;
        req.userType = result.userType;
        req.userId = decodedToken.userId;
        req.email = decodedToken.email;
        return next();
      }
    })
    .catch((error) => {
      req.isAuth = false;
      return next();
    });
};
