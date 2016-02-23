/**
 * Created by shaishab on 2/19/16.
 */

'use strict';

/**
 * Module dependencies.
 */
    require('../models/userModel');
var _ = require('lodash'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    User = mongoose.model('User'),
    errorHandler = require('../helpers/errorHandler');

/**
 * Signup
 */
exports.signup = function(req, res) {
    // For security measurement we remove the roles from the req.body object
    delete req.body.roles;

    // Init Variables
    var user = new User(req.body);
    var message = null;

    // Add missing user fields
    user.provider = 'local';
    user.displayName = user.firstName + ' ' + user.lastName;
    console.log(user);
    // Then save the user
    user.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;

            req.login(user, function(err) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.json(user);
                }
            });
        }
    });
};

/**
 * Signin after passport authentication
 */
exports.signin = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err || !user) {
            res.status(400).send(info);
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;

            req.login(user, function(err) {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.json(user);
                }
            });
        }
    })(req, res, next);
};

/**
 * Signout
 */
exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};

/**
 * Get user info
 */

exports.getUserInfo = function(req, res) {
    return res.status(200).send({status:'ok',message:'Yes you hit the correct url', user: {firstName: "Shaishab", lstName:"roy"}});
};


