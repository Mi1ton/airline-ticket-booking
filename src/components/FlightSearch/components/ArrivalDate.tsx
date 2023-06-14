import { TextField } from "@mui/material";

interface props {
  setArrivalDate: React.Dispatch<string>;
  arrivalDate: string;
}

function ArrivalDate({ setArrivalDate, arrivalDate }: props) {
  return (
    <TextField
      label="Arrival date"
      type="date"
      onChange={(e) => setArrivalDate(e.target.value)}
      value={arrivalDate}
    />
  );
}

export default ArrivalDate;
