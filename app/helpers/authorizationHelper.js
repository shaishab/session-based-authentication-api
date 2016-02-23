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
    User = mongoose.model('User');

exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).send({
            message: 'User is not logged in'
        });
    }

    next();
};