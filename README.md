## Check-in Server
This is a simple express.js based webserver for a flight booking application.
It's barebones, but it might be a good base if someone else wants to go from here.

## Running the application

- npm i to install the dependencies
- npm run start starts the server. By default it runs on port 4050. You can change it on server_props.port property on the package.json.

### Routes
[GET]  /fees/list - Returns a list of all fees.
[POST] /fees/insert - Expects the fees on a fee array.

[GET] /passengers/insert - Expects the passengers on an array, same as fees.
[PUT] /passengers/reserveseat - Reservers a seat for the passenger. After 3+ the reservation 
is considered expired and any passenger can get that seat.
[PUT] /passengers/bookseat - After the seat is booked, no other passenger can take it. Users with valid reservation
will get their seats.

[GET] /seats/all - Shows all the seats available on the airplane.
[POST] /seats/insert = Expects the seats on a seat array. 

### Mock Data
There are a couple json files you on the /data folder you can use to populate
the database. Each file corresponds to one of the collections: fees, passengers and seats.

### Dependencies
- Node.js 8+
- npm
- MongoDB
