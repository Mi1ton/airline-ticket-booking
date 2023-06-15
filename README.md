**Installation and run:**
git clone https://github.com/Mi1ton/airline-ticket-booking.git
cd airline-ticket-booking
npm i
npm run dev

# airline-ticket-booking
**Assignment:**

Your task is to create a web application for booking airline tickets using React. The application should simulate the functionality of ticket booking according to API data. I am sending the test dataset as an attachment.

**Application requirements:**

Project Structure: Create a proper project structure in React and organise components, services and styles according to best practices.

Load flights: Load the mock data and hold its state in the React application. Use a suitable state management tool (e.g. React Context, Redux...) to store and update the mock flights and booking data. State changes should be reflected in the UI.

Search for available flights: Implement a flight search component. Users should be able to specify origin and destination airports, departure date and other relevant parameters and show flights matching the filtering in a list.

Flight booking: After the user selects a flight, allow the user to select seats and complete the booking. The user should be able to select the desired seats and enter passenger details. After simulated booking, display confirmation and information about the booked flight.

Data validation: Check if the entered data is valid (e.g. date validation etc...). Show the user the corresponding error messages in case of invalid data.

**Bonus:**

Error handling: Simulate various error conditions such as data loading errors, invalid server responses, etc. Display appropriate error messages to the user.
