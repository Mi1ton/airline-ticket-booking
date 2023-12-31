import DestinationAirport from "./components/DestinationAirport";
import OriginAirport from "./components/OriginAirport";
import DepartureDate from "./components/DepartureDate";
import ArrivalDate from "./components/ArrivalDate";
import SubmitButton from "./components/SubmitButton";
import { useState } from "react";
import type { searchParams } from "../../types";
import { Box } from "@mui/material";
import { defaultDateValue } from "../../utils/utils";

interface props {
  setSearchParams: React.Dispatch<React.SetStateAction<searchParams>>;
}

function FlightSearch({ setSearchParams }: props) {
  const [originAirport, setOriginAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [departureDate, setDepartureDate] = useState<string>(
    defaultDateValue()
  );
  const [arrivalDate, setArrivalDate] = useState<string>(defaultDateValue());
  console.log(defaultDateValue());

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchParams({
      from: originAirport,
      to: destinationAirport,
      departure: departureDate,
      arrival: arrivalDate,
    });
  }

  return (
    <Box component="form" onSubmit={(e) => handleSubmit(e)}>
      <OriginAirport
        setOriginAirport={setOriginAirport}
        originAirport={originAirport}
      />
      <DestinationAirport
        setDestinationAirport={setDestinationAirport}
        destinationAirport={destinationAirport}
      />
      <DepartureDate
        setDepartureDate={setDepartureDate}
        departureDate={departureDate}
      />
      <ArrivalDate setArrivalDate={setArrivalDate} arrivalDate={arrivalDate} />
      <SubmitButton />
    </Box>
  );
}

export default FlightSearch;
