import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    Uilsun,
    UilSunset,
} from "@iconscout/react-unicons"

function WeatherDetails() {
    return (
        <div>
            <div className='flex items-center justify-center py-5 text-white'>
                <p>Cloudy</p>
            </div>

            <div className='flex flex-row items-center justify-between text-black py-3'>
                <img src="https://icon-library.com/images/weather-sun-icon/weather-sun-icon-11.jpg" 
                alt=""
                className='w-20' 
                />
                <p className='text-4xl'> 34&deg;</p>
                <div className='flex flex-col space-y-3'>
                    <div className='flex font-normal text-sm items-center justify-center'>
                        <UilTemperature size={18} className="mr-1"/>
                        Real fell;
                        <span className='font-medium ml-1'>32&deg;</span>
                    </div>
                    <div className='flex font-normal text-sm items-center justify-center'>
                        <UilTear size={18} className="mr-1"/>
                        Humidity;
                        <span className='font-medium ml-1'>60%</span>
                    </div>
                    <div className='flex font-normal text-sm items-center justify-center'>
                        <UilWind size={18} className="mr-1"/>
                        Speed;
                        <span className='font-medium ml-1'>10 km/hr</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails
