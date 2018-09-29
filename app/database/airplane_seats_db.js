'use strict';
const mongoose = require('mongoose');
const seats_models = require('../models/airplane_seats');
const AirplaneSeats = seats_models.AirplaneSeats;
const Seat = seats_models.Seat;

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