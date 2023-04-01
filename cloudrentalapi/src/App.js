import { useEffect } from 'react'
import { API } from 'aws-amplify'
import React from 'react'

import {Route, Routes} from 'react-router-dom'

import InputPage from './pages/input-page';
import RankingPage from './pages/ranking-page';


function App() {
  return (
      <div>
        <Routes>
            <Route exact path = "/" element = {<InputPage />}/>
            <Route path = "/ranking-page" element = {<RankingPage />}/>
            {/* <Route path = "/loadingfactors" element = {<PropertyDetails />}/> */}
        </Routes>
      </div>
  );
}
export default App