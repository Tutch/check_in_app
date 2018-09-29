'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkin');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db!');
});

module.exports = db;