/**
 * Created by shaishab on 2/18/16.
 */
'use strict';

/**
 * Module dependencies.
 */
var authorization = require('../helpers/authorizationHelper'),
    userController = require('../controllers/userController');

module.exports = function(router) {
    router.route('/user/me')
        .get(authorization.requiresLogin, userController.getUserInfo);

    router.route('/signup')
        .post(userController.signup);

    router.route('/signin')
        .post(userController.signin);

    router.route('/signout')
        .get(userController.signout);
};