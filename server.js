const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4500;
const sequelize = require("./Config/Connection");
// const sequelize = require("./config/Connections");

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.json());

//General routes
app.use("/", require("./Router/Non_Sec_Route"));
app.use("/api", require("./Router/Route"));

//Enabling sequelize and starting the server;
sequelize
  .authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => err.message);
