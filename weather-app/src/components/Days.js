import React from 'react'

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function Days() {
    return (
        <div className='flex justify-center mt-6 space-x-4'>
            {daysOfWeek.map((day, index) => (
                <div key={index} className='text-black font-medium uppercase'>
                    {day}
                </div>
            ))}
        </div>
    );
}

export default Days
