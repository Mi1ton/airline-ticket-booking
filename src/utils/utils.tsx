import type { seat, flightData, searchParams } from "../types";
import * as dayjs from "dayjs";

export function defaultDateValue(yearsToSubtract = 0) {
  return dayjs(new Date())
    .subtract(yearsToSubtract, "year")
    .format("YYYY-MM-DD");
}

export function filterAvailableSeats(seats: seat[]): seat[] {
  return seats.filter((seat) => seat.available);
}

export function filterFlights(
  flightsData: flightData[],
  searchParams: searchParams
): flightData[] {
  const filteredFlights = flightsData.filter((flight) => {
    const hasAvailableSeats = filterAvailableSeats(flight.seats).length > 0;
    const correctFrom =
      flight.from.toLowerCase() === searchParams.from.toLowerCase();
    const correctTo = flight.to.toLowerCase() === searchParams.to.toLowerCase();
    const correctDeparture = flight.departure.includes(searchParams.departure);
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
