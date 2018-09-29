'use strict';
const SeatSchema = mongoose.model('Seat', SeatSchema)

let AirplaneSeatsSchema = new mongoose.Schema({
  seats: [SeatSchema]
});
  
module.exports = mongoose.model('AirplaneSeats', AirplaneSeatsSchema);