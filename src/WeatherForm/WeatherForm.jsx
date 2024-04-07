import React, { useState } from 'react';
import styles from './WeatherForm.module.css';

function WeatherForm({ onSubmit }) {
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.weatherForm}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={styles.cityInput}
        placeholder="Enter city"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
