/**
 * Created by shaishab on 2/18/16.
 */

'use strict';

/**
 * Module dependencies.
 */
    require('../app/models/userModel');
var passport = require('passport'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

/**
 * Module init function.
 */
module.exports = function() {
    // Serialize sessions
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // Deserialize sessions
    passport.deserializeUser(function(id, done) {
        User.findOne({
            _id: id
        }, '-salt -password', function(err, user) {
            done(err, user);
        });
    });
    require('../config/strategies/local')();
};

