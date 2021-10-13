const db = require("../../models/");
const User = db.users;

const getUsers = () => {
  return User.find({})
    .then((users) => {
      return users.map((user) => {
        return { ...user._doc, password: null };
      });
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = { getUsers };
