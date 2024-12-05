import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for climbing gyms..."
        className="search-bar"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;