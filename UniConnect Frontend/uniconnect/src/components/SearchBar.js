"use client"

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center justify-center mt-4 text-white bg-black">
      <input
        type="text"
        placeholder="Search by username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 p-3 mr-2 text-white bg-black w-80"
      />
      <button
        onClick={handleSearch}
        className="bg-indigo-500 text-white p-3 mr-8 ml-4 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
