import React from 'react';

const LocationInfo = ({
  city,
  icon,
  temperature,
  humidity,
  windSpeed,
  weatherDescription,
  pressure,
  visibility,
  sunrise,
  sunset
}) => {
  return (
    <div className="flex flex-col p-4 border rounded-md shadow-md mt-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={icon} alt="Weather Icon" className="w-8 h-8 mr-2" />
          <div>
            <p className="font-bold">{city}</p>
            <p>{weatherDescription}</p>
            <button className="text-blue-500 hover:text-black">Switch Temp</button>
          </div>
        </div>
        <div className="flex flex-col text-right">
          <p>{temperature}&deg;</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {windSpeed} mph</p>
        </div>
      </div>
      <div className="mt-auto flex justify-between">
        <p>Pressure: {pressure} hPa</p>
        <p>Visibility: {visibility} Mtrs</p>
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset}</p>
      </div>
    </div>
  );
};

export default LocationInfo;
