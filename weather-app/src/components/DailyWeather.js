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
                        07:00am
                    </p>
                    <img src="https://seekicon.com/free-icon-download/weather-cloudy_2.svg" 
                    className='w-12 my-1'
                    alt=""
                     />
                     <p className='font-medium'>10&deg;</p>
                </div>
            </div>
        </div>
    )
}

export default DailyWeather
