'use strict';
module.exports = function(app) {
  var event = require('../controllers/EventController');

//event Routers
  app.route('/events')
    .get(event.list_all_events)
    .post(event.sendEvent);

  app.route('/events/:eventName')
    .get(event.get_event_by_name);
  
  var address = require('../controllers/addressController');

  // address Routes
  app.route('/address/:eventName')
    .get(address.list_all_dress_by_event)

  app.route('/address')
    .get(address.list_all_address)
    .post(address.create_a_address);


};


