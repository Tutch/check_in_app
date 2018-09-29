'use strict';
const mongoose = require('mongoose');
const seats_models = require('../models/airplane_seats');
const AirplaneSeats = seats_models.AirplaneSeats;
const Seat = seats_models.Seat;

module.exports = {
    insertSeats: (req, res) => {
        let airplane_seats = new AirplaneSeats;
        let receivedSeats = req.body['seats'];

        if(receivedSeats && receivedSeats.length > 0) {
            airplane_seats.seats = receivedSeats;
        
            airplane_seats.save((err, docs) => {
                if(err) {
                    res.send('error');
                }

                res.send(docs);
            });
        }
    },
    listAllSeats: (req, res) => {
        AirplaneSeats.find((err, docs) => {
            if(err) {
                console.log(err);
                res.send();
            }

            res.send(docs);
        })
    }
};
