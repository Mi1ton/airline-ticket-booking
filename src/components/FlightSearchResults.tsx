import type { flightData } from "../types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

interface props {
  filteredFlights: flightData[];
  setSelectedFlightID: React.Dispatch<React.SetStateAction<number | null>>;
}

function FlightSearchResults({ filteredFlights, setSelectedFlightID }: props) {
  return (
    <List>
      {filteredFlights.map((flight) => (
        <ListItem key={flight.id}>
          <ListItemText primary={flight.from} />
          <ListItemText primary={flight.to} />
          <ListItemText primary={flight.price} />
          <Button
            variant="contained"
            onClick={() => setSelectedFlightID(flight.id)}>
            Book
          </Button>
          {/* ADD DISPLAY OF FREE SEATS AMOUNT  */}
          {/* ADD FLIGHT LENGTH */}
          {/* ADD FLDEPARTUREART AND LANDING TIME */}
        </ListItem>
      ))}
    </List>
  );
}

export default FlightSearchResults;
