import React from 'react';
import { UilClouds } from '@iconscout/react-unicons';

const DailyWeather = ({ dailyData }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Daily Weather Forecast</h2>
      <div className="grid grid-cols-3 gap-4">
        {dailyData.map((day, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h3 className="text-md font-medium">{day.date}</h3>
            <img src={UilClouds} alt="Weather Icon" className="w-8 h-8 mt-2" />
            <p className="mt-2">{day.temperature}&deg;</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyWeather;
