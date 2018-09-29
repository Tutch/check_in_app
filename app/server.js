const express = require('express')
const connection = require('./mongo_interface');

const seats_router = require('./routers/airplane_seats_router');
const passengers_router = require('./routers/passengers_router');

const app = express()
const port = 3000

app.use('/seats', seats_router);
app.use('/passengers', passengers_router);

app.listen(port, () => {
    console.log(`Server alive on ${port}.`);
});
