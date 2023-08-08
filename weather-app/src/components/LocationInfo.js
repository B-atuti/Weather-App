import React from 'react';

const LocationInfo = ({ city, icon, temperature, humidity, windSpeed }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <img src={icon} alt="Weather Icon" className="w-8 h-8 mr-2" />
        <div>
          <p className="font-bold">{city}</p>
          <button className="text-blue-500 hover:text-black">Switch Temp</button>
        </div>
      </div>
      <div className="flex flex-col text-right">
        <p>{temperature}&deg;</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} mph</p>
      </div>
    </div>
  );
};

export default LocationInfo;
