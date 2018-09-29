'use strict';
const mongoose = require('mongoose');
const airplane_db = require('../database/airplane_seats_db');

module.exports = {
    insertSeats: (req, res) => {
        let receivedSeats = req.body['seats'];

        if(receivedSeats && receivedSeats.length > 0) {
            airplane_db.saveSeats(receivedSeats).then(result => {
                res.send(result);
            }).catch(err => {
                res.send(err);
            });
        }else {
            res.send('empty');
        }
    },
    listAllSeats: (req, res) => {
        airplane_db.listSeats().then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        });
    }
};
