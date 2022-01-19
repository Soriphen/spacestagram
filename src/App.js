import React from "react";
import Apods from "./components/Apods";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateFnsAdapter from "@mui/lab/AdapterDateFns";
import CircularProgress from "@mui/material/CircularProgress";
import "./styles.css";

/* pastWeek() returns the date of 7 days previous of today's date */
const pastWeek = () => {
  let date = new Date();
  let pastWeekDate = date.getDate() - 7;

  date.setDate(pastWeekDate);

  let tzOffset = date.getTimezoneOffset() * 60000; // This helps prevent the timezone from being incorrect when using toISOString()

  pastWeekDate = new Date(date - tzOffset);

  return pastWeekDate;
};

export default function App() {
  const [apods, setApods] = React.useState(null);
  const dateLikesRef = React.useRef({});
  const [dateLikes, setDateLikes] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  // Initialize the dates for the date-range component
  const [enteredDate, setEnteredDate] = React.useState([
    pastWeek(),
    new Date()
  ]);

  /* We start with a default date range that is 7 days up until now. Then this useEffect is 
  updated with a new date range based on the enteredDate dependency. In other words,
  every time the user updates the state with a new date range they pick, the fetch API gets data according to
  that new date range.
  */
  React.useEffect(() => {
    const startDate = enteredDate[0].toISOString().match(/[\d-]+/)[0];
    const endDate = enteredDate[1].toISOString().match(/[\d-]+/)[0];
    const apodsAPIURL = `https://api.nasa.gov/planetary/apod?api_key=SqFFo6cwJlXTax6FWe2m1nB5TXGiN3LdkQku2hw4&start_date=${startDate}&end_date=${endDate}`;

    const fetchApod = async () => {
      try {
        const response = await fetch(apodsAPIURL, {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          setError(error);
          return Promise.reject(error);
        }

        data.forEach((apod) => {
          if (!dateLikesRef.current.hasOwnProperty(apod.date)) {
            dateLikesRef.current[apod.date] = { liked: false };
          }
        });

        setApods(data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApod();
  }, [enteredDate]);

  if (error) {
    return <div>{error.message}</div>;
  } else if (!isLoaded) {
    return (
      <CircularProgress
        sx={{ position: "absolute", top: "50%", left: "50%" }}
      />
    );
  } else {
    return (
      <LocalizationProvider dateAdapter={DateFnsAdapter}>
        <div className="App">
          {apods && (
            <Apods
              apods={apods}
              enteredDate={enteredDate}
              setEnteredDate={setEnteredDate}
              dateLikesRef={dateLikesRef.current}
              dateLikes={dateLikes}
              setDateLikes={setDateLikes}
            />
          )}
        </div>
      </LocalizationProvider>
    );
  }
}
