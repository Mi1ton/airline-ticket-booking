import {
  TextField,
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Box,
} from "@mui/material";
import { useState } from "react";
import { flightData, seat, bookingData } from "../../types";
import { defaultDateValue, filterAvailableSeats } from "../../utils/utils";

interface props {
  flight: flightData;
  setBookingData: React.Dispatch<React.SetStateAction<bookingData | null>>;
}

function BookingPage({ flight, setBookingData }: props) {
  const availableSeats = filterAvailableSeats(flight.seats);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(defaultDateValue(18));
  const [seatID, setSeatID] = useState(availableSeats[0].id);

  function handleSave(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setBookingData({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      dateOfBirth: dateOfBirth,
      seatID: seatID as number,
      flight: flight,
    });
  }

  return (
    <Box
      component="form"
      sx={{ display: "block", m: "auto" }}
      onSubmit={(e) => handleSave(e)}>
      <div>
        <TextField
          autoFocus
          required
          name="firstName"
          label="First name"
          margin="dense"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          required
          name="lastName"
          label="Last name"
          margin="dense"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          name="phoneNumber"
          type="tel"
          label="Phone Number"
          margin="dense"
          inputProps={{ pattern: "[0-9]*" }}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          required
          name="email"
          type="email"
          label="Email"
          margin="dense"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <TextField
        required
        name="dateOfBirth"
        type="date"
        label="Date of birth"
        margin="dense"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <FormControl>
        <InputLabel id="seat-select-label">Seat</InputLabel>
        <Select
          required
          labelId="seat-select-label"
          name="Seat"
          label="Seat"
          margin="dense"
          value={seatID}
          onChange={(e) => setSeatID(e.target.value as number)}>
          {availableSeats.map((seat) => (
            <MenuItem key={seat.id} value={seat.id}>
              {seat.number}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        sx={{ display: "block", m: "auto" }}>
        Finish Booking
      </Button>
    </Box>
  );
}

export default BookingPage;
