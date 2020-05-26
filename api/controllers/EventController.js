'use strict';


var mongoose = require('mongoose'),
Event = mongoose.model('Events'),
Address = mongoose.model('Address');

exports.list_all_events = function(req, res) {
  Event.find({}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};




exports.create_a_event = function(req, res) {
  var new_event = new Event(req.body);
  new_event.save(function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.read_a_event = function(req, res) {
  Event.findById(req.params.eventd, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.update_a_event = function(req, res) {
  Event.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};


exports.delete_a_event = function(req, res) {
  Event.remove({
    _id: req.params.eventId
  }, function(err, event) {
    if (err)
      res.send(err);
    res.json({ message: 'Event successfully deleted' });
  });
};

exports.sendEvent = async function(req, res) {
  const query = { eventName: req.body.eventName} ;
  console.log(query);

  let event = await Event.findOneAndUpdate(query, {$inc : {'count' : 1}},  { new: true, upsert: true });
  if (event != null) {
  const addressQuery = { eventName: req.body.eventName, countryCode: req.body.countryCode, region: req.body.region} ;
  let address = await Address.findOneAndUpdate(addressQuery, {$inc : {'count' : 1}}, { new: true, upsert: true });

    res.json({ status: 1, message: "Success", data: {event: event, address: address} });
  } else {
    res.json({ status: 0, message: "Failure" });
  }
  
};

exports.get_event_by_name = function(req, res) {
    Event.find({ eventName: req.params.eventName}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

const addAddress = function(eventId, params) {
  console.log("\n>> Add Image:\n", image);
  return Event.findByIdAndUpdate(
    eventId,
    {
      $push: {
        images: {
          url: image.url,
          caption: image.caption
        }
      }
    },
    { new: true, useFindAndModify: false }
  );
};