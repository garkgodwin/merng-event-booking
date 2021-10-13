const express = require("express");
const cors = require("cors");
//?app
const app = express();

const graphql = require("./graphql");

//?======================+MIDDLEWARES
app.use(express.json());

//?======================+GRAPH QL+=================
app.use("/graphql", graphql);

module.exports = app;
