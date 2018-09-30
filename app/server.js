const express = require('express')
const connection = require('./mongo_interface');

const seats_router = require('./routers/airplane_seats_router');
const passengers_router = require('./routers/passengers_router');
const fees_router = require('./routers/fees_router');

module.exports = {
    start: (port) => {
        const app = express()

        app.use('/seats', seats_router);
        app.use('/passengers', passengers_router);
        app.use('/fees', fees_router);

        app.listen(port, () => {
            console.log(`Server alive on ${port}.`);
        });
    }
}