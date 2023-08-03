import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'

function Search() {
    return (
        <div className='flex flex-row justify-center my-4'>
            <div className='flex flex-row w-4/1 items-center justify-center space-x-4'>
                <input 
                type="text" 
                placeholder='search the country...'
                className='text-l font-light p-.8 w-full shadow-xl capitalize placeholder:lowercase ' />
                <UilSearch size={20} className='text-black cursor-pointer transition ease-out hover:scale-110' />
            </div>

            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name='metric'
                className='text-l text-black font-normal'
                ></button>
            </div>
        </div>
    )
}

export default Search
