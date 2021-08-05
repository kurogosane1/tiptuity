// All packages
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const passport = require("./passport");
// Initiallizing express and other variables
const app = express();
const sequelize = require("./config/connection");
const myStore = require("./config/Session");
const PORT = process.env.PORT || 4000;

// BodyParder now deprecated in 2021 but now part of express to interpret data sent to it
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.json());

// Middleware
app.use(cors());
app.set("trust proxy", 1);
app.use(
  session({
    store: myStore,
    key: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 1 * 60 * 60 * 1000,
      sameSite: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      httpOnly: true,
    },
  })
);
myStore.sync();
app.use(passport.initialize());
app.use(passport.session());

// Pointing to Router so that Express can use it
app.use("/api", require("./router/route"));
app.use("/pay", require("./router/payment"));

//This is when to deploy
if (process.env.NODE_ENV === "production") {
  app.use(express.static("front/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front", "build", "index.html"));
  });
}

// To initialize the server
sequelize
  .authenticate()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => err.message);
