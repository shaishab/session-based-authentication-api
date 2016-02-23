/**
 * Created by shaishab on 2/18/16.
 */

/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();

/**
 * GET home page
 */
router.route('/')
    .get(function (req, res, next) {
        res.status(200).send({status:'ok',message:'Welcome user registration api.'});
    });

/**
 * Load all routes here
 */
require('./app/routers/userRoutes')(router);


module.exports = router;
