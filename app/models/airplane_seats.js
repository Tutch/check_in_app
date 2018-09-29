'use strict';
const mongoose= require('mongoose');
  
let AirplaneSeatsSchema = new mongoose.Schema({
  seats: [{
    identifier: {type: String, required: true},
    type: {type: String, required: true},
    reserveExpiresAt: {type: Number, required: false},
    passenger: {type: mongoose.Schema.Types.ObjectId, required: false}
  }]
}, {collection: 'seats'});

module.exports = mongoose.model('AirplaneSeats', AirplaneSeatsSchema);