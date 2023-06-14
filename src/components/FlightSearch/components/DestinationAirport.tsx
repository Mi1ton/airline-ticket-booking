import { TextField } from "@mui/material";

interface props {
  setDestinationAirport: React.Dispatch<string>;
  destinationAirport: string;
}

function DestinationAirport({
  setDestinationAirport,
  destinationAirport,
}: props) {
  return (
    <TextField
      label={"Destination airport"}
      value={destinationAirport}
      onChange={(e) => setDestinationAirport(e.target.value)}
    />
  );
}

export default DestinationAirport;
