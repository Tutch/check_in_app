'use strict';
const Passenger = require('../models/passenger');

module.exports = {
    savePassengers: (received_passengers) => {
        return new Promise((resolve, reject) => {
            received_passengers.forEach(p => {
                let passenger = new Passenger(p);
    
                passenger.save((err, docs) => {
                    if(err) {
                        reject(err);
                    }
                });
            });
              
            resolve(docs);
        });
    },
    changePassengerSeat: (passenger_id, seat_id) => {
        return new Promise((resolve, reject) => {
            Passenger.findOneAndUpdate(
                { '_id':passenger_id },
                { $set:{'seat': seat_id} }, (err, doc) => {

                if(err) {
                    reject(err);
                }

                resolve(doc);
            });
        });
    }
}