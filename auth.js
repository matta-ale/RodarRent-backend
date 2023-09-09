const passport = require('passport');  //tutorial: https://www.youtube.com/watch?v=Q0a0594tOrc

const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.BACKEND_URL + '/google/callback', //esta callback es la url a la que vas cuando el login es successful
      passReqToCallback: true,
    },
    // acá abajo va lo que sucede cuando tenemos un login success. Comentamos para que no haga nada porque no hay DDBB
    //   function(request, accessToken, refreshToken, profile, done) {
    //     User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //       return done(err, user);
    //     });
    //   }
    function (request, accessToken, refreshToken, profile, done) {
        console.log(profile);
      return done(null, profile);
    }
  )
);

passport.serializeUser (function(user,done) {
    done(null,user)
})

passport.deserializeUser (function(user,done) {
    done(null,user)
})
