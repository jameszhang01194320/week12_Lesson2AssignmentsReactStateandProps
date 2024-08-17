// App.jsx
// import React from 'react';
import MoviesList from './components/MoviesList';
import './App.css'; // Make sure to import the CSS file

const App = () => {
  return (
    <div className="left-aligned-container">
      <h1>--My Movie App--</h1>
      <MoviesList />
    </div>
  );
};

export default App;
