module.exports = {
  isLoggedIn: (req, res, next) => {
    let x = req.isAuthenticated();
    console.log(req.sessionID);
    if (req.isAuthenticated() === true) {
      return next();
    }

    return res.redirect("/Login");
  },

  checkNotAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      res.json({ message: "Already recognized" });
    }
    next();
  },
};
