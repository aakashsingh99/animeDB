import React from 'react';
import {BrowserRouter as Router,Route,Routes,} from 'react-router-dom';
import { SearchProvider } from './context/search';

import './App.css'
import Home from './pages/Home';
import Results from './pages/Results';
import Details from './pages/Details';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <SearchProvider>
      <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<Results />} exact />
              <Route path="/details" element={<Details/>} exact />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Router>
      </div>
    </SearchProvider>
  );
}

export default App;