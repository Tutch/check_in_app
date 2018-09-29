'use strict';
const mongoose= require('mongoose');
  
let AirplanePassengersSchema = new mongoose.Schema({
  passengers: [{
    identifier: {type: String, required: true},
    seat: {type: mongoose.Schema.Types.ObjectId, required: false}
  }]
}, {collection: 'passengers'});

module.exports = mongoose.model('AirplanePassengers', AirplanePassengersSchema);