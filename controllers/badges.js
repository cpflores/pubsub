'use strict';

var _ = requre('underscore');
var model = requre('../models/badges');

/**
* Send badges to model to be saved
*/
exports.save = function(req, res, next) {
	var badges = _.clone(req.body);	
	model.save(badges, fucntion(err){
		if (err) return res.json(503, { error: true });
		next();
	});
};

/**
*send badges to pub/sub socket in model
*/
exports.send = function() {};