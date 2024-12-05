import React from 'react';
import '../styles/CityList.css';

const CityList = () => {
  const cities = [
    { name: 'New York', gyms: 10 },
    { name: 'Los Angeles', gyms: 8 },
    { name: 'Denver', gyms: 15 },
    { name: 'Seattle', gyms: 7 },
  ];

  return (
    <div className="city-list">
      <h2>City Gym List</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            {city.name} - {city.gyms} gyms
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;