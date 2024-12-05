import React, { useState } from 'react';
import ClimbingToken from './components/ClimbingToken';
import SearchBar from './components/SearchBar';
import BrowseButton from './components/BrowseButton';
import CityList from './components/CityList';
import ClimbingTypeSelector from './components/ClimbingTypeSelector';
import './App.css';

const App = () => {
  const [showCityList, setShowCityList] = useState(false);
  const [selectedClimbingTypes, setSelectedClimbingTypes] = useState([]);

  const handleBrowseClick = () => {
    setShowCityList(true);
  };

  return (
    <div className="app-container">
      <ClimbingToken />
      <SearchBar />
      <ClimbingTypeSelector
        selectedTypes={selectedClimbingTypes}
        setSelectedTypes={setSelectedClimbingTypes}
      />
      <BrowseButton onClick={handleBrowseClick} />
      {showCityList && <CityList />}
    </div>
  );
};

export default App;