// src/components/WeatherCard.js
import React from 'react';
import '../styles/styles.css'; // Chemin corrigé pour le fichier CSS

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p>Température: {weather.main.temp}°C</p>
    </div>
  );
};

export default WeatherCard;
