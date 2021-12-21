import React, { useState } from 'react';
import {BrowserRouter as Router,Route,Routes,} from 'react-router-dom';
import { SearchContext } from './context/search';

import Home from './pages/Home';
import './App.css'
import Results from './pages/Results';
import Details from './pages/Details';

const App = () => {
  const [animeData, setAnimeData] = useState([]);
  const [inputData, setInputData] = useState([]);
  const [singleData, setSingleData] = useState({});

  const setData = (data, input) => {
    setInputData(input);
    setAnimeData(data);
  }

  const setSingle = (data) => {
    setSingleData(data);
  }

  const search = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchTerm}&limit=20`
    ).then((response) => response.json())
  };

  return (
    <SearchContext.Provider value={{search, animeData, setData, singleData, setSingle ,inputData}}>
      <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<Results />} exact />
              <Route path="/details" element={<Details/>} exact />
            </Routes>
          </Router>

      </div>
    </SearchContext.Provider>
  );
}

export default App;