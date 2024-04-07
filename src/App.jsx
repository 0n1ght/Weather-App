import React, { useState } from 'react';
import './App.css';
import WeatherForm from './weatherForm/WeatherForm.jsx';
import WeatherCard from './weatherCard/WeatherCard.jsx';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "fc34a83a45d8e6c9ee6f20aa7923533d";

  const handleSubmit = async (city) => {
    if (city) {
      try {
        const data = await getWeatherData(city);
        setWeatherData(data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError("Could not fetch weather data");
      }
    } else {
      setError("Please enter a city");
    }
  };

  const getWeatherData = async (city) => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Could not fetch weather data");
    }
    return await response.json();
  };

  return (
    <>
      <WeatherForm onSubmit={handleSubmit} />

      {error && (
        <div className="card">
          <p className="errorDisplay">{error}</p>
        </div>
      )}

      <WeatherCard weatherData={weatherData} />
    </>
  );
}

export default App;
