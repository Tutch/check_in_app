const express = require('express');
const router = express.Router(); 

router.get('/all', (req, res) => {
    res.send('have some seats!');
});

module.exports = router;