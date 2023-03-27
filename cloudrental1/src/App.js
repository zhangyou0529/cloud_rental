import React from 'react'

import './App.css';
import './styles/globals.css'

import {Route, Routes} from 'react-router-dom';

import PropertyDetails from './pages/property-details';
import RankingPage from './pages/ranking-page';
import InputPage from './pages/input-page';

function App() {
  return (
      <div>
        <Routes>
            <Route exact path = "/" element = {<InputPage />}/>
            <Route path = "/ranking-page" element = {<RankingPage />}/>
            <Route path = "/property-details" element = {<PropertyDetails />}/>
        </Routes>
      </div>
  );
}

export default App;