'use strict';
const Fee = require('../models/fee');

module.exports = {
    saveFees: (received_fees) => {
        return new Promise((resolve, reject) => {
            received_fees.forEach(p => {
                let fee = new Fee(p);
    
                fee.save((err, docs) => {
                    if(err) {
                        reject(err);
                    }
                });
            });
              
            resolve(docs);
        });
    },
    listFees: (filter={}) => {
        return new Promise((resolve, reject) => {
            Fee.find(filter, (err, docs) => {
                if(err) {
                    reject(err);
                }
        
                resolve(docs);
            })
        });
    },
}