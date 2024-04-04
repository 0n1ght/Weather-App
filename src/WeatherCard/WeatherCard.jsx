import React from 'react';
import './WeatherCard.css';

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = weatherData;

  const getWeatherEmoji = (weatherId) => {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
          return "🌩️";
        case (weatherId >= 300 && weatherId < 400):
          return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
          return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
          return "❄️";
        case (weatherId >= 700 && weatherId < 800):
          return "🌫️";
        case (weatherId === 800):
          return "☀️";
        case (weatherId >= 801 && weatherId < 810):
          return "☁️";
        default:
          return "？";
      }
  };

  return (
    <div className="card">
      <h1 className="cityDisplay">{city}</h1>
      <p className="tempDisplay">{(temp - 273.15).toFixed(1)}°C</p>
      <p className="humidityDisplay">Humidity: {humidity}%</p>
      <p className="descDisplay">{description}</p>
      <p className="weatherEmoji">{getWeatherEmoji(id)}</p>
    </div>
  );
}

export default WeatherCard;
