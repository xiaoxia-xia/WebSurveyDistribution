const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose= require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('../config/keys')

const User = mongoose.model('users');

passport.serializeUser( (user, done) => {
    done(null, user.id);
})


passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
})


passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret: keys.googleClientSecrete,
    callbackURL: '/auth/google/callback',
    proxy: true
}, 
async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleClientID: profile.id });
    if(existingUser){
        // we have record with given ID
        return done(null, existingUser);
    }

        // in which case we don't have record for this ID
    const user = await new User({ googleID: profile.id});
    done(null, user);

    }
));