passport.use("local-login"), new LocalStrategy({
   usernameField : 'username',
   passwordField : 'password',
   passReqToCalback: true
},
function(req, username, password, done){
   process.nextTick(function(){
      User.findOne({'local.username': email}, function(err, user){
         if(err){
         return done(err);
         }
         if(!user)
         {
         return done(null, false, req.flash("loginMessage", "no User found"));
         }
         if(user.local.password != password)
         {
         return done(null, false, req.flash('loginMessage', "invalid password"));
         }
         return done(null, user)
      }),

   })
}
})