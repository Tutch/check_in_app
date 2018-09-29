'use strict';
const passengers_db = require('../database/passengers_db');

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
        // Request needs to receive passenger and seat info (id)
        let json = req.body;
        
        if(json) {
            // 1. update passenger info with seat id
            // 2. Update seat with passenger id and +3 minutes expiration time
            Promise.all([
                passengers_db.changePassengerSeat(json.passengerId, json.seatId),
                passengers_db.setSeatReserve(json.passengerId, json.seatId)
            ]).then(values => {
                console.log(values);
            }).catch(err => {
                console.log(err);
            });
        }

        res.send('!!');
    },
    reserveSeat: (req, res) => {
        // Reservation is done before payment.
        // Request needs to receive passenger info, namely its id
        // Step 1. Reserve the seat
        
    }
};
