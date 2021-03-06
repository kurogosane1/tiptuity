const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4500;
const sequelize = require("./config/connection");
const session = require("./config/Session");
const passport = require("passport");
const flash = require("connect-flash");
const path = require("path");
const cors = require("cors");

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.json());

app.use(cors());

//usesing Sessions
app.set("trust proxy", 1);
app.use(flash());
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
require("./Controller/Passport")(passport);

//General routes
app.use("/", require("./Router/Route")); //For Protected Routes

//This is when to deploy
if (process.env.NODE_ENV === "production") {
  app.use(express.static("front/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front", "build", "index.html"));
  });
}

//Enabling sequelize and starting the server;
sequelize
  .authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => err.message);
