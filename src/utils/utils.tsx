import type { seat } from "../types";

export function defaultDateValue(yearsToSubtract = 0) {
  const today = new Date();
  const year = (today.getFullYear() - yearsToSubtract)
    .toString()
    .padStart(2, "0");
  const month = today.getMonth().toString().padStart(2, "0");
  const day = today.getDay().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function filterAvailableSeats(seats: seat[]): seat[] {
  return seats.filter((seat) => seat.available);
}
