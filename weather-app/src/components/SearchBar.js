import React, { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons'; // Import the search icon

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="bg-white p-2 rounded-md shadow-md transition mt-4 flex flex-row justify-between">
      <input
        type="text"
        className="bg-transparent border-solid-black text-black focus:outline-none pl-8"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className=" ml-28 align-middle transform -translate-y-1/2 bg-transparent text-black hover:text-blue-800 transition mt-3 "
        onClick={handleSearch}
      >
        <UilSearch size="18" /> 
      </button>
    </div>
  );
};

export default SearchBar;
