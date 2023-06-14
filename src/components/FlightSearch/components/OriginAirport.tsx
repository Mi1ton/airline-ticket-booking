import { TextField } from "@mui/material";

interface props {
  setOriginAirport: React.Dispatch<string>;
  originAirport: string;
}
function OriginAirport({ setOriginAirport, originAirport }: props) {
  //   function handleChange(value: string) {}
  return (
    <TextField
      autoFocus
      label={"Origin airport"}
      value={originAirport}
      onChange={(e) => setOriginAirport(e.target.value)}
    />
  );
}

export default OriginAirport;
