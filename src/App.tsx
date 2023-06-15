import { useState, useEffect } from "react";
import { Container, Snackbar, Button } from "@mui/material";
import FlightSearch from "./components/FlightSearch/FlightSearch";
import FlightSearchResults from "./components/FlightSearchResults";
import BookingPage from "./components/BookingPage/BookingPage";
import BookingReview from "./components/BookingReview";
import type { flightData, searchParams, bookingData } from "./types";
import { filterFlights } from "./utils/utils";

function App() {
  const [flightsData, setFlightsData] = useState<flightData[]>([]);
  const [searchParams, setSearchParams] = useState<searchParams>({
    from: "",
    to: "",
    departure: "",
    arrival: "",
  });
  const [selectedFlightID, setSelectedFlightID] = useState<number | null>(null);
  const isBooking = selectedFlightID === null ? false : true;
  const [bookingData, setBookingData] = useState<bookingData | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    getFlightsData();
  }, []);

  function getFlightsData() {
    fetch("src/assets/flights-data.json")
      .then((response) => response.json())
      .then((json) => setFlightsData(json))
      .catch((error) => {
        console.log(error);
        setOpenSnackbar(true);
      });
  }

  const snackbarRetryButton = <Button onClick={getFlightsData}>Retry</Button>;

  function handleClose(event: React.SyntheticEvent | Event, reason?: string) {
    setOpenSnackbar(false);
  }

  return (
    <Container maxWidth="md">
      <FlightSearch setSearchParams={setSearchParams} />
      {isBooking ? null : (
        <FlightSearchResults
          filteredFlights={filterFlights(flightsData, searchParams)}
          setSelectedFlightID={setSelectedFlightID}
        />
      )}
      {flightsData.length > 0 && isBooking && bookingData === null ? (
        <BookingPage
          flight={
            flightsData.find(
              (flight) => flight.id === selectedFlightID
            ) as flightData
          }
          setBookingData={setBookingData}
        />
      ) : null}
      {bookingData !== null ? (
        <BookingReview bookingData={bookingData} />
      ) : null}
      <Snackbar
        open={openSnackbar}
        message={"There was an error getting flights schedule"}
        onClose={handleClose}
        action={snackbarRetryButton}
      />
    </Container>
  );
}

export default App;
