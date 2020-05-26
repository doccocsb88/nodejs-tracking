'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
    eventName: {
    type: String,
    required: 'Kindly enter the name of the event'
  },
  country: {
    type: String,
    default: "CCC"

  },
  countryCode: {
    type: String,
    default: "CCC"

  },
  region: {
    type: String,
    default: "CCC"

  },
  regionName: {
    type: String,
    default: "CCC"
  },
  city: {
    type: String,
    default: "CCC"
  },
  count: {
    type: Number,
    default: 1
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Address', AddressSchema);