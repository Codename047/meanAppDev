var meetUp = require('../model/meetupModel');

module.exports.create = function (req,res){
	var meetup = new meetUp(req.body);
	meetup.save(function(err,result){
		res.json(result);
	});
};

module.exports.list = function (req, res){
	meetUp.find({},function(err,results){
		res.json(results);
	})
}