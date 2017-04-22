var mysql = require("mysql");

var connectionInfo = {
  host: "localhost",
  user: "root",
  password: "saadkhurshid310588",
  database: "tips_db"
};
var JAWSDB_URL ="mysql://pd8snkhuu33r73wq:ulg388f5wf2hiltk@vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hr73pb1yryr21n9s";
if (process.env.JAWSDB_URL)
{
  connectionInfo = process.env.JAWSDB_URL;
}

var connection = mysql.createConnection(connectionInfo);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;




// passport.use("local-login"), new LocalStrategy({
//    usernameField : 'username',
//    passwordField : 'password',
//    passReqToCalback: true
// },
// function(req, username, password, done){
//    process.nextTick(function(){
//       User.findOne({'local.username': email}, function(err, user){
//          if(err){
//          return done(err);
//          }
//          if(!user)
//          {
//          return done(null, false, req.flash("loginMessage", "no User found"));
//          }
//          if(user.local.password != password)
//          {
//          return done(null, false, req.flash('loginMessage', "invalid password"));
//          }
//          return done(null, user)
//       }),

//    })
// }
// })