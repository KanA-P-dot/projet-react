// src/pages/WeatherList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';

const WeatherList = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            q: 'Paris',
            appid: process.env.REACT_APP_OPENWEATHER_API_KEY,
            units: 'metric'
          }
        });
        setWeatherData([response.data]);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-list">
      {weatherData.map((weather, index) => (
        <WeatherCard key={index} weather={weather} />
      ))}
    </div>
  );
};

export default WeatherList;
