import React from 'react';
import '../styles/BrowseButton.css';

const BrowseButton = ({ onClick }) => {
  return (
    <button className="browse-button" onClick={onClick}>
      Browse All Climbing Gym
    </button>
  );
};

export default BrowseButton;