## Check-in Server
This is a simple express.js based webserver for a flight booking application.
It's barebones, but it might be a good base if someone else wants to go from here.

## Running the application

- **npm i**
- **npm run start**

The server runs by default on port 4050. You can change this by changing the value on server_props.port on the package.json file.

## Routes
| Action  | Route         | Description  |
| --------|:------------- | :-----       |
|  GET    | /fees/list     | Returns a list of all fees |
|  POST   | /fees/insert   | Expects the fees on a fee array |
|  POST   | /passengers/insert | Expects the passengers on an array, same as fees.|
|  PUT    | /passengers/reserveseat | Reservers a seat for the passenger. After 3s the reservation is considered expired |
|  PUT    | /passengers/bookseat | After the seat is booked, no other passenger can take it |
|  GET    | /seats/all | Shows all the seats available on the airplane |
|  POST   | /seats/insert | Expects the seats on a seat array | 

## Usage
#### Reserving, paying and booking the flight.
Suppose the passanger wants to reserve a seat. The user wants to see the prices of the many different seat types and options, make his mind and then choose one of the available seats.

1. The application fetches all the available seats with */seats/all*. It also fetches the different prices of the seats with */fees/list*.
2. User looks around and decides on a particular seat. He wants to reserve the seat A3.
3. The application will look at the _id of the seat A3 and the _id of the current user, then POST them to the /passengers/reserveseat endpoint.
4. The user gets around to paying for his ticket.
5. The server will then send the id of the user throught the following JSON
{
  "passengerId": ID OF THE USER
}
to the /passengers/bookseat endpoint. The server will check if that user has a previous reservation and assign that seat to the user.

#### User doesn't bother with reservation and just wants to book his flight.
1. 1 and 2 from above repeat.
2. The user does not mind reserving any particular seat.
3. The server will repeat the same steap as 5. above
4. The server will check and notice that the user has no seat reservation, so it will choose a random seat to that user.

## JSON Examples
> /passengers/reserveseat

{
  "passengerId": *mongodb_id*,
  "seatId": *mongodb_id*
}

> /passengers/bookseat

{
  "passengerId": *mongodb_id*
}


## Mock Data
There are a couple json files you on the /data folder you can use to populate
the database. Each file corresponds to one of the collections: fees, passengers and seats.

## Dependencies
- Node.js 8+
- npm
- MongoDB
