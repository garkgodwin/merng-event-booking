const express = require("express");
const cors = require("cors");
//?app
const app = express();

const graphql = require("./graphql");
const isAuth = require("./middlewares/auth");

app.use(express.json());
//?======================+MIDDLEWARES
app.use(isAuth);
//?======================+GRAPH QL+=================
app.use("/graphql", graphql);

module.exports = app;
