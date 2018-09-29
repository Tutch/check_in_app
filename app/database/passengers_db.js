'use strict';
const AirplanePassengers = require('../models/passengers');

module.exports = {
    savePassengers: (received_passengers) => {
        return new Promise((resolve, reject) => {

            let passengers = new AirplanePassengers;
            passengers.passengers = received_passengers;

            passengers.save((err, docs) => {
                if(err) {
                    reject(err);
                }
                
                resolve(docs);
            });
        });
    },
    changePassengerSeat: (passenger_id, seat_id) => {
        return new Promise((resolve, reject) => {
            AirplanePassengers.findOneAndUpdate(
                { 'passengers.identifier':passenger_id },
                { $set:{'passengers.$.seat': seat_id} }, (err, doc) => {

                if(err) {
                    reject(err);
                }

                resolve(doc);
            });
        });
    },
    setSeatReserve: (passenger_id, seat_id) => {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}