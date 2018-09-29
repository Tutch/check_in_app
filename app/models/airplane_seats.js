'use strict';
const mongoose= require('mongoose');

let SeatSchema = new mongoose.Schema({
  identifier: {type: String, required: true},
  type: {type: String, required: true},
  reserveExpiresAt: {type: Number, required: false},
  passenger: {type: mongoose.Schema.Types.ObjectId, required: false}
});
  
let AirplaneSeatsSchema = new mongoose.Schema({
  seats: [SeatSchema]
}, {collection: 'seats'});

module.exports = {
  Seat: mongoose.model('Seat', SeatSchema),
  AirplaneSeats: mongoose.model('AirplaneSeats', AirplaneSeatsSchema)
}