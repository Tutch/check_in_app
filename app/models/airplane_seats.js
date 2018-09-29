'use strict';
const mongoose= require('mongoose');

let SeatSchema = new mongoose.Schema({
  identifier: String,
  type: String,
  reserveExpiresAt: Number,
  isReserved: Boolean
});
  
let AirplaneSeatsSchema = new mongoose.Schema({
  seats: [SeatSchema]
}, {collection: 'seats'});

module.exports = {
  Seat: mongoose.model('Seat', SeatSchema),
  AirplaneSeats: mongoose.model('AirplaneSeats', AirplaneSeatsSchema)
}