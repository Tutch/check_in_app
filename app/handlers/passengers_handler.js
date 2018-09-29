'use strict';
const passengers_db = require('../database/passengers_db');
const seats_db = require('../database/airplane_seats_db');

module.exports = {
    insertPassengers: (req, res) => {
        let receivedPass= req.body['passengers'];

        if(receivedPass && receivedPass.length > 0) {
            passengers_db.savePassengers(receivedPass).then(result => {
                res.send(result);
            }).catch(err => {
                res.send(err);
            });
        }else {
            res.send('empty');
        }
    },
    bookSeat: (req, res) => {
        // Booking is done after payment.
        // Request needs to receive passenger and seat identifiers
        // Passenger identifier is his name, but it could be a unique
        // identifier i.e passport number.
        let json = req.body;
        
        // 1. update passenger info with seat id
        // 2. Update seat with passenger id and +3 minutes expiration time
        Promise.all([
            passengers_db.changePassengerSeat(json.passengerId, json.seatId),
            //seats_db.setSeatReserve(json.passengerId, json.seatId)
        ]).then(values => {
            res.send('Booking done.');
        }).catch(err => {
            console.log('Oops.');
        });
    },
    reserveSeat: (req, res) => {
        // Reservation is done before payment.
        // Request needs to receive passenger info, namely its id
        // Step 1. Reserve the seat
        
    }
};
