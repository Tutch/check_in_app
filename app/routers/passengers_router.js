const express = require('express');
const bodyParser = require('body-parser')
const handler = require('../handlers/passengers_handler');

const router = express.Router(); 

router.post('/bookseat', bodyParser.json(), handler.bookSeat);
router.post('/reserveseat', bodyParser.json(), handler.reserveSeat);

module.exports = router;