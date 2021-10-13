const app = require("./app");
const db = require("./models");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const ATLAS_URI = process.env.ATLAS_URI;

const main = async () => {
  //*DATABASE
  /*
    if database is started, start routes?, if routes started start server
  */
  db.mongoose
    .connect(ATLAS_URI)
    .then(() => {
      console.log("Connected to Mongo DB!");
      app.get("/", (req, res) => {
        res.send("HELLO WORLD!");
      });
      app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

main();
