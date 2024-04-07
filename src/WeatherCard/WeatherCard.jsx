import React from 'react';
import styles from './WeatherCard.module.css';

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
    <div className={styles.card}>
      <h1 className={styles.cityDisplay}>{city}</h1>
      <p className={styles.tempDisplay}>{(temp - 273.15).toFixed(1)}°C</p>
      <p className={styles.humidityDisplay}>Humidity: {humidity}%</p>
      <p className={styles.descDisplay}>{description}</p>
      <p className={styles.weatherEmoji}>{getWeatherEmoji(id)}</p>
    </div>
  );
}

export default WeatherCard;
