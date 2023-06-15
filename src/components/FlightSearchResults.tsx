import type { flightData } from "../types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { filterAvailableSeats } from "../utils/utils";
import * as dayjs from "dayjs";

interface props {
  filteredFlights: flightData[];
  setSelectedFlightID: React.Dispatch<React.SetStateAction<number | null>>;
}

function FlightSearchResults({ filteredFlights, setSelectedFlightID }: props) {
  return (
    <List>
      {filteredFlights.map((flight) => (
        <ListItem key={flight.id}>
          <ListItemText primary={`${flight.from} - ${flight.to}`} />
          <ListItemText
            primary={`${dayjs(flight.departure).format("h:mmA")} - ${dayjs(
              flight.arrival
            ).format("h:mmA")}`}
            secondary={flight.duration}
          />
          <ListItemText primary={`${filterAvailableSeats(flight.seats).length} seats available`} />
          <ListItemText primary={`Price: ${flight.price}`} />
          <Button
            variant="contained"
            onClick={() => setSelectedFlightID(flight.id)}>
            Book
          </Button>
          {/* ADD DISPLAY OF FREE SEATS AMOUNT  */}
        </ListItem>
      ))}
    </List>
  );
}

export default FlightSearchResults;
