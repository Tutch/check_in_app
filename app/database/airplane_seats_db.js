'use strict';
const AirplaneSeats = require('../models/airplane_seats');

module.exports = {
    saveSeats: (received_seats) => {
        return new Promise((resolve, reject) => {

            let airplane_seats = new AirplaneSeats;
            airplane_seats.seats = received_seats;

            airplane_seats.save((err, docs) => {
                if(err) {
                    reject(err);
                }
                
                resolve(docs);
            });
        });
    },
    listSeats: (filter={}) => {
        return new Promise((resolve, reject) => {
            AirplaneSeats.find((err, docs) => {
                if(err) {
                    reject(err);
                }
        
                resolve(docs);
            })
        });
    }
}