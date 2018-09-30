'use strict';
const express = require('express');
const bodyParser = require('body-parser')
const handler = require('../handlers/fees_handler');

const router = express.Router(); 

router.post('/insert', bodyParser.json(), handler.insertFees)
router.get('/list', bodyParser.json(), handler.listFees);

module.exports = router;