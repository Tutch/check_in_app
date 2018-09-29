'use strict';
const mongoose= require('mongoose');
  
let PassengerSchema = new mongoose.Schema({
  identifier: {type: String, required: true},
  seat: {type: mongoose.Schema.Types.ObjectId, required: false}
}, {collection: 'passengers'});

module.exports = mongoose.model('Passenger', PassengerSchema);