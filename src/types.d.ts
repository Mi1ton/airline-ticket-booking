export interface flightData {
  id: number;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  seats: Array<seat>;
}

export interface seat {
  id: number;
  number: string;
  available: boolean;
}

export interface searchParams {
  from: string;
  to: string;
  departure: string;
  arrival: string;
}

export interface bookingData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  seatID: number;
  flight: flightData;
}
