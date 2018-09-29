'use strict';
const Seat = require('../models/airplane_seats');

module.exports = {
    saveSeats: (received_seats) => {
        return new Promise((resolve, reject) => {

            received_seats.forEach(s => {
                let seat = Seat(s);

                seat.save((err, docs) => {
                    if(err) {
                        reject(err);
                    }        
                });
            });

            resolve(docs);
        });
    },
    listSeats: (filter={}) => {
        return new Promise((resolve, reject) => {
            Seat.find(filter, (err, docs) => {
                if(err) {
                    reject(err);
                }
        
                resolve(docs);
            })
        });
    },
    setSeatReserve: (passenger_id, seat_id) => {
        return new Promise((resolve, reject) => {
            // From ye old Stack
            // https://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
            let timestamp = new Date();
            let expiration = timestamp.setMinutes(timestamp.getMinutes() + 3);

            Seat.findOneAndUpdate(
                {_id: seat_id}, 
                {$set:{
                    passenger:passenger_id,
                    reserveExpiresAt: expiration
                }}, 
                (err, doc) => {
                    if(err) {
                        reject(err);
                    }

                    resolve(doc);
                })
        });
    }
}