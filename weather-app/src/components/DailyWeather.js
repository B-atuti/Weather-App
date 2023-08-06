import React from 'react'

function DailyWeather( { title } ) {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-black font-medium uppercase'>{title}
                </p>
            </div>
            <hr className='my-2'/>

            <div className='flex flex-row items-center justify-between text-black'>
                <div className='flex flex-col items-center justify-center border border-solid border-black border-t-2 rounded-lg box-border-' >
                    <p className='font-light text-sm'>
                        07:00am
                    </p>
                    <img src="https://seekicon.com/free-icon-download/weather-cloudy_2.svg" 
                    className='w-12 my-1'
                    alt=""
                     />
                     <p className='font-medium'>10&deg;</p>
                </div>
                <div className='flex flex-col items-center justify-center border border-solid border-black border-t-2 rounded-lg'>
                    <p className='font-light text-sm'>
                        09:00am
                    </p>
                    <img src="https://seekicon.com/free-icon-download/weather-cloudy_2.svg" 
                    className='w-12 my-1'
                    alt=""
                     />
                     <p className='font-medium'>10&deg;</p>
                </div>
                <div className='flex flex-col items-center justify-center border border-solid border-black border-t-2 rounded-lg'>
                    <p className='font-light text-sm'>
                        11:00am
                    </p>
                    <img src="https://icon-library.com/images/weather-sun-icon/weather-sun-icon-11.jpg" 
                    className='w-12 my-1'
                    alt=""
                     />
                     <p className='font-medium'>31&deg;</p>
                </div>
                <div className='flex flex-col items-center justify-center border border-solid border-black border-t-2 rounded-lg'>
                    <p className='font-light text-sm'>
                        2:00pm
                    </p>
                    <img src="https://icon-library.com/images/weather-sun-icon/weather-sun-icon-25.jpg" 
                    className='w-12 my-1'
                    alt=""
                     />
                     <p className='font-medium'>24&deg;</p>
                </div>
                <div className='flex flex-col items-center justify-center border border-solid border-black border-t-2 rounded-lg'>
                    <p className='font-light text-sm'>
                        04:00pm
                    </p>
                    <img src="https://www.pngitem.com/pimgs/m/106-1066957_cloudy-foggy-windy-weather-symbol-svg-png-icon.png" 
                    className='w-12 my-1 bg-black'
                    alt=""
                     />
                     <p className='font-medium'>16&deg;</p>
                </div>
            </div>
        </div>
    )
}

export default DailyWeather
