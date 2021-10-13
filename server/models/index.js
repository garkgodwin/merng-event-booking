const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.events = require("./event.model");
db.users = require("./user.model");

module.exports = db;
