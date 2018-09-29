'use strict';
const mongoose= require('mongoose');
const Seat = require('./airplane_seats').Seat;

let PassengerSchema = new mongoose.Schema({
  identifier: {type: String, required: true},
  seat: {type: mongoose.Schema.Types.ObjectId, required: false}
});
  
let AirplanePassengersSchema = new mongoose.Schema({
  passengers: [PassengerSchema]
}, {collection: 'passengers'});

module.exports = {
    Passenger: mongoose.model('Passenger', PassengerSchema),
    AirplanePassenger: mongoose.model('AirplanePassenger', AirplanePassengersSchema)
}