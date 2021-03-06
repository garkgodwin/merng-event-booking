const app = require("./app");
const db = require("./models");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const ATLAS_URI = process.env.ATLAS_URI;
const { createAdmin } = require("./seed.js");

const apolloServer = require("./graphql");
const main = async () => {
  console.log("> Connecting to Mongo DB...");
  //?======================+GRAPH QL+=================
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  //?========================+DATABASE+=============
  await db.mongoose
    .connect(ATLAS_URI)
    .then(async () => {
      console.log("=> Connected to Mongo DB.");
      //await createAdmin();
      app.get("/", (req, res) => {
        res.send("HELLO WORLD!");
      });
      app.listen(PORT, () => {
        console.log(`=> Server listening on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.log("!> " + error);
    });
};

main();

//TODO: ?MAKE ERROR HANDLING
//TODO: ?LEARN MIDDLEWARES FOR GRAPHQL
//TODO: !IMPORTANT - FIX the query getLoggedInData
//!CHANGE GRAPHQL TO APPOLO
