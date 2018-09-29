const express = require('express')

const airplane_seats_router = require('./routers/airplane_seats/routes');

const app = express()
const port = 3000

app.use('/seats', airplane_seats_router);

app.listen(port, () => {
    console.log(`Server alive on ${port}.`);
});
