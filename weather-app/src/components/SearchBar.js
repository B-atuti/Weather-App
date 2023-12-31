import React, { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="bg-white p-2 rounded-md shadow-md transition mt-4 flex flex-row justify-between w-3/4 ml-24">
      <input
        type="text"
        className="bg-transparent border-solid-black text-black focus:outline-none pl-8"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ textTransform: 'capitalize' }} 
      />
      <button
        className="ml-4 align-middle transform -translate-y-1/2 bg-transparent text-black hover:text-blue-800 transition mt-3 text-2xl"
        onClick={handleSearch}
      >
        <UilSearch size="18" />
      </button>
    </div>
  );
};

export default SearchBar;
