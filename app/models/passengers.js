'use strict';
const mongoose= require('mongoose');
const Seat = require('./airplane_seats').SeatSchema;

let PassengerSchema = new mongoose.Schema({
  identifier: String,
  seat: Seat
});
  
let AirplanePassangersSchema = new mongoose.Schema({
  passengers: [PassengerSchema]
}, {collection: 'passengers'});

module.exports = {
    Passenger: mongoose.model('Passenger', PassengerSchema),
    AirplanePassenger: mongoose.model('AirplanePassenger', AirplanePassangersSchema)
}