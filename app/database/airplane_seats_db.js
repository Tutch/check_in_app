'use strict';
const mongoose = require('mongoose');
const Seat = require('../models/airplane_seats');
const util = require('../util');

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
    bookSeat: (passenger_id, seatId=undefined) => {
        return new Promise((resolve, reject) => {
            if(seatId) {
                Seat.findOneAndUpdate(
                    {'_id': seatId}, 
                    {$set:{reserveExpiresAt:0}}, 
                    (err, doc) => {
                        if(err) {
                            reject(err);
                        }
                        
                        resolve();
                })
            }else {
                Seat.find({}, (err, docs)  => {
                    if(err) {
                        console.log(err);
                        reject(err);
                    }

                    let arr = docs.filter(d => {
                        return util.minutesFromTimeToNow(d.reserveExpiresAt) > 3 || (d.reserveExpiresAt == 0 && !d.passenger);
                    });

                    let idx = Math.floor(Math.random() * arr.length);

                    Seat.findOneAndUpdate(
                        {_id: arr[idx]['_id']},
                        {$set:{
                            passenger: passenger_id,
                            reserveExpiresAt: 0
                        }},
                        (err, docs) => {
                            if(err) {
                                console.log(err);
                                reject(err);
                            }

                            resolve(docs);
                        })
                });
            }
        });
    },
    setSeatReserve: (passenger_id, seat_id) => {
        return new Promise((resolve, reject) => {
            // From ye old Stack
            // https://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
            let timestamp = new Date();
            let expiration = timestamp.setMinutes(timestamp.getMinutes() + 3);

            // It erases the previous entry before updating, so the
            // user can't reserver every sit on the flight.
            Seat.findOneAndUpdate(
                {passenger: passenger_id},
                {
                    $unset:{
                        passenger:1,
                    },
                    $set:{
                        reserveExpiresAt: 0 
                    }
                },
                (err, docs) => {
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
                    });
                });
        });
    }
}