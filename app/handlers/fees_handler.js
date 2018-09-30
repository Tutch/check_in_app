'use strict';
const fees_db = require('../database/fees_db');

module.exports = {
    insertFees: (req, res) => {
        let receivedFees= req.body['fees'];

        if(receivedFees && receivedFees.length > 0) {
            fees_db.saveFees(receivedFees).then(result => {
                res.send(result);
            }).catch(err => {
                res.status(400);
                res.send(err);
            });
        }else {
            res.status(400);
            res.send('No fees to add.');
        }
    },
    listFees: (req, res) => {
        fees_db.listFees().then(result => {
            res.send(result);
        }).catch(err => {
            res.status(400);
            res.send(err);
        });
    }
};
