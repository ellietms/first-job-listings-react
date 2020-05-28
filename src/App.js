import React from 'react';
import Data from './data/data.json';
import JobListing from './JobListing'
import './App.css';

function App() {
  return (
    <div className="App">
      <JobListing jobs = {Data}/>
    </div>
  );
}

export default App;
