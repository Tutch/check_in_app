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
            Seat.find((err, docs) => {
                if(err) {
                    reject(err);
                }
        
                resolve(docs);
            })
        });
    }
}