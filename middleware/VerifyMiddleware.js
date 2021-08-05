const myStore = require("../config/Session");

module.exports.VerifyLoggedIn = (req, res) => {
  // Verify is there is a session coming in
  if (!req.sessionID) {
    res.status(400).json({ isAuthenticated: false });
  } else {
    myStore.get(req.session.id, (err, session) => {
      if (err) {
        res.status(200).json({ err, isAuthenticated: false });
      } else if (!session) {
        res.status(200).json({ isAuthenticated: false });
      } else {
        return res.status(200).json({ isAuthenticated: true });
      }
    });
  }
};

// THis is for checking if the user is logged in
module.exports.Authenticate = (req, res, next) => {
  // Verify is there is session coming in
  if (req.sessionID) {
    //Verify in store
    myStore.get(req.sessionID, (err, session) => {
      if (err) {
        return res.status(200).json({ message: err, isAuthenticated: false });
      }
      if (!session) {
        return res
          .status(200)
          .json({ message: "User is not logged", isAuthenticated: false });
      }
      next();
    });
  } else {
    return res
      .status(200)
      .json({ message: "User is not logged in", isAuthenticated: false });
  }
};
