import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import FlightSearch from "./components/FlightSearch/FlightSearch";
import FlightSearchResults from "./components/FlightSearchResults";
import BookingPage from "./components/BookingPage/BookingPage";
import BookingReview from "./components/BookingReview";
import type { flightData, searchParams, bookingData } from "./types";
import { filterAvailableSeats } from "./utils/utils";

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

  useEffect(() => {
    setFlightsData(initialJson);
  }, []);

  function filterFlights(
    flightsData: flightData[],
    searchParams: searchParams
  ): flightData[] {
    const filteredFlights = flightsData.filter((flight) => {
      const hasAvailableSeats = filterAvailableSeats(flight.seats).length > 0;
      const correctFrom =
        flight.from.toLowerCase() === searchParams.from.toLowerCase();
      const correctTo =
        flight.to.toLowerCase() === searchParams.to.toLowerCase();
      const correctDeparture = flight.departure.includes(
        searchParams.departure
      );
      const correctArrival = flight.arrival.includes(searchParams.arrival);
      return (
        correctFrom &&
        correctTo &&
        correctDeparture &&
        correctArrival &&
        hasAvailableSeats
      );
    });
    return filteredFlights;
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
    </Container>
  );
}

export default App;

const initialJson: flightData[] = [
  {
    id: 1,
    from: "Prague",
    to: "London",
    departure: "2023-06-10T10:00:00",
    arrival: "2023-06-10T12:00:00",
    duration: "2h",
    price: 150,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: false },
      { id: 3, number: "B1", available: true },
      { id: 4, number: "B2", available: true },
    ],
  },
  {
    id: 2,
    from: "London",
    to: "Paris",
    departure: "2023-06-10T14:00:00",
    arrival: "2023-06-10T16:00:00",
    duration: "2h",
    price: 200,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: true },
      { id: 3, number: "B1", available: true },
      { id: 4, number: "B2", available: true },
    ],
  },
  {
    id: 3,
    from: "Paris",
    to: "Rome",
    departure: "2023-06-10T09:00:00",
    arrival: "2023-06-10T11:00:00",
    duration: "2h",
    price: 180,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: true },
      { id: 3, number: "B1", available: false },
      { id: 4, number: "B2", available: true },
    ],
  },
  {
    id: 4,
    from: "Rome",
    to: "Barcelona",
    departure: "2023-06-10T13:00:00",
    arrival: "2023-06-10T16:00:00",
    duration: "3h",
    price: 250,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: true },
      { id: 3, number: "B1", available: true },
      { id: 4, number: "B2", available: true },
    ],
  },
  {
    id: 5,
    from: "Barcelona",
    to: "Berlin",
    departure: "2023-06-10T11:00:00",
    arrival: "2023-06-10T13:00:00",
    duration: "2h",
    price: 170,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: true },
      { id: 3, number: "B1", available: true },
      { id: 4, number: "B2", available: false },
    ],
  },
  {
    id: 6,
    from: "Berlin",
    to: "Vienna",
    departure: "2023-06-10T09:30:00",
    arrival: "2023-06-10T11:30:00",
    duration: "2h",
    price: 190,
    seats: [
      { id: 1, number: "A1", available: false },
      { id: 2, number: "A2", available: false },
      { id: 3, number: "B1", available: false },
      { id: 4, number: "B2", available: false },
    ],
  },
  {
    id: 7,
    from: "Vienna",
    to: "Amsterdam",
    departure: "2023-06-10T10:15:00",
    arrival: "2023-06-10T12:15:00",
    duration: "2h",
    price: 180,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: true },
      { id: 3, number: "B1", available: true },
      { id: 4, number: "B2", available: true },
    ],
  },
  {
    id: 8,
    from: "Amsterdam",
    to: "Madrid",
    departure: "2023-06-10T13:30:00",
    arrival: "2023-06-10T16:30:00",
    duration: "3h",
    price: 250,
    seats: [
      { id: 1, number: "A1", available: false },
      { id: 2, number: "A2", available: true },
      { id: 3, number: "B1", available: true },
      { id: 4, number: "B2", available: true },
    ],
  },
  {
    id: 9,
    from: "Madrid",
    to: "Athens",
    departure: "2023-06-10T11:30:00",
    arrival: "2023-06-10T14:30:00",
    duration: "3h",
    price: 280,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: true },
      { id: 3, number: "B1", available: true },
      { id: 4, number: "B2", available: true },
    ],
  },
  {
    id: 10,
    from: "Athens",
    to: "Vienna",
    departure: "2023-06-11T09:00:00",
    arrival: "2023-06-11T12:00:00",
    duration: "3h",
    price: 220,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: true },
      { id: 3, number: "B1", available: true },
      { id: 4, number: "B2", available: true },
    ],
  },
  {
    id: 11,
    from: "Vienna",
    to: "Lisbon",
    departure: "2023-06-11T14:30:00",
    arrival: "2023-06-11T18:30:00",
    duration: "4h",
    price: 300,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: false },
      { id: 3, number: "B1", available: true },
      { id: 4, number: "B2", available: false },
    ],
  },
  {
    id: 12,
    from: "Lisbon",
    to: "Vienna",
    departure: "2023-06-11T23:00:00",
    arrival: "2023-06-12T02:00:00",
    duration: "3h",
    price: 190,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: true },
      { id: 3, number: "B1", available: true },
      { id: 4, number: "B2", available: true },
    ],
  },
  {
    id: 13,
    from: "Prague",
    to: "London",
    departure: "2023-06-11T17:00:00",
    arrival: "2023-06-11T19:00:00",
    duration: "2h",
    price: 150,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: true },
      { id: 3, number: "B1", available: true },
      { id: 4, number: "B2", available: true },
    ],
  },
  {
    id: 14,
    from: "London",
    to: "Paris",
    departure: "2023-06-11T14:00:00",
    arrival: "2023-06-11T16:00:00",
    duration: "2h",
    price: 200,
    seats: [
      { id: 1, number: "A1", available: false },
      { id: 2, number: "A2", available: false },
      { id: 3, number: "B1", available: false },
      { id: 4, number: "B2", available: false },
    ],
  },
  {
    id: 15,
    from: "Paris",
    to: "Rome",
    departure: "2023-06-11T09:00:00",
    arrival: "2023-06-11T11:00:00",
    duration: "2h",
    price: 180,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: true },
      { id: 3, number: "B1", available: false },
      { id: 4, number: "B2", available: true },
    ],
  },
  {
    id: 16,
    from: "Rome",
    to: "Barcelona",
    departure: "2023-06-11T06:00:00",
    arrival: "2023-06-11T09:00:00",
    duration: "3h",
    price: 250,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: true },
      { id: 3, number: "B1", available: false },
      { id: 4, number: "B2", available: false },
    ],
  },
  {
    id: 17,
    from: "Barcelona",
    to: "Berlin",
    departure: "2023-06-11T01:00:00",
    arrival: "2023-06-11T03:00:00",
    duration: "2h",
    price: 370,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: false },
      { id: 3, number: "B1", available: true },
      { id: 4, number: "B2", available: false },
    ],
  },
  {
    id: 18,
    from: "Berlin",
    to: "Vienna",
    departure: "2023-06-11T09:30:00",
    arrival: "2023-06-11T11:30:00",
    duration: "2h",
    price: 220,
    seats: [
      { id: 1, number: "A1", available: true },
      { id: 2, number: "A2", available: true },
      { id: 3, number: "B1", available: true },
      { id: 4, number: "B2", available: true },
    ],
  },
];
