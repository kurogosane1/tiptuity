var LocalStrategy = require("passport-local").Strategy;
//bring in a database of users to get the newUser error removed//
var User = require(" ../models/user");

module.exports = function(passport){

   passport.serializeUser(function(user, done){
      done(null, user.id);
   });

   passport.deserializeUser(function(id, done){
      User.findById(id, function(err, user){
         done(err, user);
      })
   });

   passport.use('local-signup', new LocalStrategy({
      username: "username",
      passwordField: 'password',
      passReqToCallback: true
   }, function(req, username, password, done){
         process.nextTick(function(){
            User.findOne({'local.username': email},function(err, user){
               if (err){
                  return done(err);

               }
               if(user)
               {
                  return done(null, false, req.flash('signupMessage', "that email was already taken"));
               }
               else 
               {
                  var newUser = new User();
                  newUser.local.username = username;
                  newUser.local.password = password;

                  newUser.save.function(err){
                     if (err)
                     {
                        throw err;
                        return done(null, newUser);
                     }
                     
                  }
               }
            })

         })
      }
   
   ));

};