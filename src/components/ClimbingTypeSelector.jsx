import React from 'react';
import '../styles/ClimbingTypeSelector.css';

const ClimbingTypeSelector = ({ selectedTypes, setSelectedTypes }) => {
  const options = [
    'Indoor Boulder',
    'Indoor Rope Climbing',
    'Lead',
    'Outside Boulder',
    'Outside Rope Climbing',
  ];

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedTypes([...selectedTypes, value]);
    } else {
      setSelectedTypes(selectedTypes.filter((type) => type !== value));
    }
  };

  return (
    <div className="climbing-type-selector">
      <label>Select Climbing Types:</label>
      <ul>
        {options.map((type, index) => (
          <li key={index}>
            <input
              type="checkbox"
              value={type}
              checked={selectedTypes.includes(type)}
              onChange={handleChange}
            />
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClimbingTypeSelector;