'use strict';


var mongoose = require('mongoose'),
Address = mongoose.model('Address');

exports.list_all_address = function(req, res) {
  Address.find({}, function(err, adress) {
    if (err)
      res.send(err);
    res.json(adress);
  });
};

exports.create_a_address = function(req, res) {
  var new_adress = new Address(req.body);
  console.log("create_a_address");
  console.log(req.body);
  
  new_adress.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.get_a_address = function(req, res) {
  Address.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.list_all_dress_by_event = function(req, res) {
  const query = { eventName: req.params.eventName} ;

  Address.find(query, function(err, address) {
    if (err)
      res.send(err);
    res.json({status: 1, message: "Success", data: address});
  });
};

exports.update_a_address = function(req, res) {
  Address.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_address = function(req, res) {
  Address.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

