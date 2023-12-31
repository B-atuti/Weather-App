import React, { useState, useEffect } from 'react';
import LocationInfo from './LocationInfo';
import { UilClouds } from '@iconscout/react-unicons';

const WeatherDetails = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('Your City');
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const apiKey = '76842783f957ba0264e735f26debdef3';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await response.json();

        setWeatherData(data.weather[0]);
        setTemperature(data.main.temp);
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
        setWeatherDescription(data.weather[0].description);
      } catch (error) {
        console.error(error);
      }
    }

    fetchWeatherData();
  }, [city]);

  return (
    <div>
      <LocationInfo
        city={city}
        icon={UilClouds} 
        temperature={temperature}
        humidity={humidity}
        windSpeed={windSpeed}
      />
    </div>
  );
};

export default WeatherDetails;
