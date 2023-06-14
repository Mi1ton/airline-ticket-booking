import type { bookingData, flightData, seat } from "../types";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Container,
  Grid,
} from "@mui/material";
import * as dayjs from "dayjs";

interface props {
  bookingData: bookingData;
}
function BookingReview({ bookingData }: props) {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    dateOfBirth,
    seatID,
    flight,
  } = { ...bookingData };
  const seatNumber = flight.seats.find((seat) => seat.id === seatID)?.number;
  const departureTimeFormatted = dayjs(flight.departure).format("h:mmA");
  const arrivalTimeFormatted = dayjs(flight.arrival).format("h:mmA");
  return (
    <Paper elevation={2}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignContent="center">
        <Grid item>
          <p>Passenger</p>
          <p>
            {firstName} {lastName}
          </p>
        </Grid>
        <Grid item>
          <p>Contact info</p>
          <p>
            {phoneNumber} | {email}
          </p>
        </Grid>
        <Grid item>
          <p>Seat</p>
          <p>{seatNumber}</p>
        </Grid>
      </Grid>
      <hr />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignContent="center">
        <Grid item>
          <p>Destination</p>
          <p>
            {flight.from} - {flight.to}
          </p>
        </Grid>
        <Grid item>
          <p>Duration</p>
          <p>
            {departureTimeFormatted} - {arrivalTimeFormatted} | {flight.duration}
          </p>
        </Grid>
        <Grid item>
          <p>Price</p>
          <p>${flight.price}</p>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default BookingReview;
