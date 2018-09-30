'use strict';
const express = require('express');
const bodyParser = require('body-parser')
const handler = require('../handlers/passengers_handler');

const router = express.Router(); 

router.post('/insert', bodyParser.json(), handler.insertPassengers);
router.put('/bookseat', bodyParser.json(), handler.bookSeat);
router.put('/reserveseat', bodyParser.json(), handler.reserveSeat);

module.exports = router;