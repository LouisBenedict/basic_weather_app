import React, {useState, createRef} from "react";
import Weather from "./components/Weather";
import './App.css';

const App = () => {
  const locationInput = createRef();
  const [location, setLocation] = useState("Malaysia");
  return (
    <div className="weather-app">

      <h2>Basic Weather Web App</h2>

      <input
        type="text"
        placeholder="Search any location: "
        ref={locationInput}
        onKeyUp={e => {
          if (e.keyCode === 13) {
            setLocation(e.target.value);
            locationInput.current.value = "";
          }
        }}
      />
      <Weather
        location={location}
        render={({error, isLoading, icon, place, temperature, conditions, time}) =>
          !error ? (
            isLoading ? (
              <div className="loading">Displaying result...</div>
            ) : (
              <div className="result">
                <div className="time">{time}</div>
                <div className="place">{place}</div>
                <div className="temperature">{temperature}&deg;C</div>
                <div className="conditions">{conditions.join(",")}</div>
                <img src={icon} alt="Sunny" className="icon" />
              </div>
            )
          ) : (
            <div className="error">
              There was an error fetching the weather. Please try again.
            </div>
          )
        }
      />
    </div>
  );
};

export default App;
