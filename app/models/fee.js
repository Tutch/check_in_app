'use strict';
const mongoose= require('mongoose');
  
let FeeSchema = new mongoose.Schema({
  identifier: {type: String, required: true},
  price: {type: Number, required: true}
}, {collection: 'fees'});

module.exports = mongoose.model('Fee',FeeSchema);