'use strict';

let SeatSchema = new mongoose.Schema({
  identifier: String,
  type: String,
  isReserved: Boolean
});
  
module.exports = mongoose.model('Seat', SeatSchema);