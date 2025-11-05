const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../models/User");

module.exports = function (passport) {
  // serialize/deserialize user for session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id).exec();
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  // Google OAuth strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.SERVER_ROOT}/auth/google/callback`,
      },
      async (accessToken, refreshToken, profile, cb) => {
        try {
          let user = await User.findOne({ "providerIds.google": profile.id });
          if (!user) {
            const email = profile.emails?.[0]?.value;
            if (email) user = await User.findOne({ email });
          }
          if (user) {
            user.providerIds.google = profile.id;
            user.name = user.name || profile.displayName;
            user.avatar = user.avatar || profile.photos?.[0]?.value;
            await user.save();
            return cb(null, user);
          }

          const newUser = await User.create({
            providerIds: { google: profile.id },
            name: profile.displayName,
            email: profile.emails?.[0]?.value,
            avatar: profile.photos?.[0]?.value,
          });

          cb(null, newUser);
        } catch (err) {
          cb(err);
        }
      }
    )
  );

  // Github Strategy
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: `${process.env.SERVER_ROOT}/auth/github/callback`,
        scope: ["user:email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ "providerIds.github": profile.id });
          if (!user) {
            const email = profile.emails?.[0]?.value;
            if (email) user = await User.findOne({ email });
          }
          if (user) {
            user.providerIds.github = profile.id;
            user.name = user.name || profile.displayName || profile.username;
            user.avatar = user.avatar || profile.photos?.[0]?.value;
            await user.save();
            return done(null, user);
          }

          const newUser = await User.create({
            providerIds: { github: profile.id },
            name: profile.displayName || profile.username,
            email: profile.emails?.[0]?.value,
            avatar: profile.photos?.[0]?.value,
          });
          done(null, newUser);
        } catch (err) {
          done(err);
        }
      }
    )
  );
};
