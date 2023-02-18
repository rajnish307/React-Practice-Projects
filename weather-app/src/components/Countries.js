import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import { Grid, Paper, Typography } from "@material-ui/core";
import {
  WbSunny,
  Cloud,
  Opacity,
  LocationOn,
  Flight,
  Public,
} from "@material-ui/icons";

const Dropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (selectedCity) {
      const API_KEY = "YOUR_OPEN_WEATHER_API_TOKEN";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setWeather(data);
        });
    }
  }, [selectedCity]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
    setSelectedCity("");
  };
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
  };
  ``;
  // console.log(Country.getCountryByCode(selectedCountry).flag)

  return (
    <div>
      <Typography variant="h4">Dependent Dropdown</Typography>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {Country.getAllCountries().map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <select value={selectedState} onChange={handleStateChange}>
          <option value="">Select State</option>
          {State.getStatesOfCountry(selectedCountry).map((state) => (
            <option key={state.isoCode} value={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>
      )}

      {selectedState && (
        <select
          value={selectedCity}
          onChange={(event) => setSelectedCity(event.target.value)}
        >
          <option value="">Select City</option>
          {City.getCitiesOfState(selectedCountry, selectedState).map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      )}

      {weather.main && (
        <Paper
          elevation={3}
          style={{ padding: 16, backgroundColor: "#f5f5f5" }}
        >
          <Typography variant="h6" style={{ color: "#666666" }}>
            Weather Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <WbSunny style={{ fontSize: 48, color: "#ffd600" }} />
              <Typography variant="body1" style={{ color: "#666666" }}>
                Temperature:
              </Typography>
              <Typography variant="h6">
                {(weather.main.temp - 273.15).toFixed(2)} °C
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Cloud style={{ fontSize: 48, color: "#2196f3" }} />
              <Typography variant="body1" style={{ color: "#666666" }}>
                Pressure:
              </Typography>
              <Typography variant="h6">
                {(weather.main.pressure / 68.9476).toFixed(2)} PSI
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Opacity style={{ fontSize: 48, color: "#00bcd4" }} />
              <Typography variant="body1" style={{ color: "#666666" }}>
                Humidity:
              </Typography>
              <Typography variant="h6">{weather.main.humidity}%</Typography>
            </Grid>
            <Grid item xs={6}>
              <LocationOn style={{ fontSize: 48, color: "#4caf50" }} />
              <Typography variant="body1" style={{ color: "#666666" }}>
                Coordinates:
              </Typography>
              <Typography variant="h6">
                {weather.coord.lat.toFixed(2)}, {weather.coord.lon.toFixed(2)}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Flight style={{ fontSize: 48, color: "#9c27b0" }} />
              <Typography variant="body1" style={{ color: "#666666" }}>
                Wind Speed:
              </Typography>
              <Typography variant="h6">
                {weather.wind.speed.toFixed(2)} m/s
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <p style={{ fontSize: 32 }}>
                {" "}
                {Country.getCountryByCode(selectedCountry).flag}
              </p>
              <Typography variant="body1" style={{ color: "#666666" }}>
                Country:
              </Typography>
              <Typography variant="h6">{weather.sys.country}</Typography>
            </Grid>
          </Grid>
        </Paper>
      )}
    </div>
  );
};

export default Dropdown;
