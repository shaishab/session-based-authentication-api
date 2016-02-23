/**
 * Created by shaishab on 2/18/16.
 */

/**
 * Module dependencies.
 */
var  _ = require("lodash");

var settings = {
    production: {
        dbUrl:'mongodb://username:password@host:port/databaseName'
    },
    development: {
        dbUrl:'mongodb://localhost:27017/devUserReg'
    }
};

var env = process.env.NODE_ENV;
var config = _.includes(["production"], env) ? settings[env] : settings["development"];

exports.config = config;

