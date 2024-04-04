import React, { useState } from 'react';
import './WeatherForm.css';

function WeatherForm({ onSubmit }) {
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit} className="weatherForm">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="cityInput"
        placeholder="Enter city"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
