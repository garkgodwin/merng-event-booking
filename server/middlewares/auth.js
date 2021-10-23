const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.users;
require("dotenv").config();

module.exports = (req, res, next) => {
  //TODO: FIX THIS MIDDLEWARE TO RUN IN LOOP
  const authHeader = req.get("Authorization");
  //!set all empty
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
    decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decodedToken);
    if (!decodedToken) {
      req.isAuth = false;
      return next();
    }
    return User.findOne({ id: decodedToken.userId, email: decodedToken.email })
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
  } catch (error) {
    req.isAuth = false;
    return next();
  }
};
