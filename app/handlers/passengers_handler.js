'use strict';
const passengers_db = require('../database/passengers_db');
const seats_db = require('../database/airplane_seats_db');
const util = require('../util');

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
        // The seat reserved for that user is his.
        // If the user has no reservation, a random unreserved 
        // seat will be selected. I hope he gets the window.
        let json = req.body;

        seats_db.listSeats({'passenger':json.passengerId}).then(doc => {
            let id = doc[0] ? doc[0]['_id'] : undefined;

            Promise.all([
                seats_db.bookSeat(json.passengerId, id),
                passengers_db.changePassengerSeat(json.passengerId, id)
            ]).then(values => {
                console.log(values);
                res.send('ok');
            }).catch(err => {
                console.log(err);
                res.send('):');
            });
        }).catch(err => {
            console.log(err);
            res.send('err');
        });
    },
    reserveSeat: (req, res) => {
        // Reservation is done before payment.
        // Request needs to receive passenger and seat identifiers
        // Passenger identifier is his name, but it could be a unique
        // identifier i.e passport number.
        let json = req.body;

        // 0. Check if the seat isn't booked to someone else
        seats_db.listSeats({'_id': json.seatId}).then(seats => {
            let expiration = seats[0]['reserveExpiresAt'];
            if(seats.length > 0 && expiration && expiration != 0 && seats[0]['passenger'].toString() != json.passengerId) {
                
                let s = seats[0];
                let diffMin = util.minutesFromTimeToNow(expiration);
                
                // Booking game is on
                if(diffMin < 3) {
                    res.send('This seat has been booked by someone else.');
                    return;
                }
            }
    
            // 1. update passenger info with seat id
            // 2. Update seat with passenger id and +3 minutes expiration time
            seats_db.setSeatReserve(json.passengerId, json.seatId).then(values => {
                res.send('Booking done.');
            }).catch(err => {
                console.log(err);
                res.send('Oops.');
            });
        }).catch(err => {
            console.log(err);
            res.send('Some error ocurred during the operation.');
        });
    }
};
