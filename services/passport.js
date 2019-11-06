const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.spotifyClientID,
      clientSecret: keys.spotifyClientSecret,
      callbackURL: '/auth/spotify/callback',
      proxy: true
    },
    async function(accessToken, refreshToken, expires_in, profile, done) {
      response = {
        accessToken,
        refreshToken,
        expires_in,
        profile
      };

      return done(null, response);
    }
  )
);
