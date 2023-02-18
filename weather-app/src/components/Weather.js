import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import {
  WbSunny,
  Cloud,
  Opacity,
  LocationOn,
  Flight,
  Public,
} from "@material-ui/icons";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (city) {
      const API_KEY = "YOUR_OPEN_WEATHER_API_TOKEN";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setWeather(data);
        });
    }
  }, [city]);
  return (
    <div style={{ padding: "10px", marginBottom: 30 }}>
      <Typography variant="h4">Global City Search</Typography>
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={() => {
          setWeather({});
          setCity("");
        }}
      >
        Clear
      </button>
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
              <Public style={{ fontSize: 48, color: "green" }} />
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

export default Weather;
