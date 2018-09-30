'use strict';
const express = require('express');
const bodyParser = require('body-parser')
const handler = require('../handlers/airplane_seats_handler');

const router = express.Router(); 

router.post('/insert', bodyParser.json(), handler.insertSeats);
router.get('/all', handler.listAllSeats);

module.exports = router;