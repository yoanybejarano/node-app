/* jshint node: true */
'use strict';

const models = require('../models'),
    async = require('async');

module.exports = (stat, callback) => {
    callback = callback || function(){};
    async.parallel([
        function(next) {
            models.Image.count({}, next);
        },
        function(next) {
            models.Comment.count({}, next);
        },
        function(next) {
            models.Image.aggregate([{
                $group: {
                    _id: null,
                    viewsTotal: { $sum: '$views' }
                }
            }], (err, result) => {
                var viewsTotal = 0;
                if (result.length > 0) {
                    viewsTotal += result[0].viewsTotal;
                }
                next(null, viewsTotal);
            });
        },
        function(next) {
            models.Image.aggregate([{
                $group: {
                    _id: null,
                    likesTotal: { $sum: '$likes' }
                }
            }], (err, result) => {
                var likesTotal = 0;
                if (result.length > 0) {
                    likesTotal += result[0].likesTotal;
                }
                next(null, likesTotal);
            });
        }
    ], (err, results) => {
        if(err) throw err;
        callback(null, {
            images: results[0],
            comments: results[1],
            views: results[2],
            likes: results[3]
        });
    });
};


