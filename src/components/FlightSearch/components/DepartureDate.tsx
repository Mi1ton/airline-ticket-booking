import { TextField } from "@mui/material";

interface props {
  setDepartureDate: React.Dispatch<string>;
  departureDate: string
}

function DepartureDate({ setDepartureDate, departureDate }: props) {
  return (
    <TextField
      label="Departure Date"
      type="date"
      onChange={(e) => setDepartureDate(e.target.value)}
      value={departureDate}
    />
  );
}

export default DepartureDate;
