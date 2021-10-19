const express = require("express");
const cors = require("cors");
//?app
const app = express();

//const graphql = require("./graphql");
const graphql = require("./graphql");
const isAuth = require("./middlewares/auth");

//?======================+MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//?set client url to access server
const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(isAuth);
//?======================+GRAPH QL+=================
app.use("/graphql", graphql);

module.exports = app;
