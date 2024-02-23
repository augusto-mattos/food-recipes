//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
              <Route index element={<Home />} />
              <Route path='/recipe/:id' element={<Recipe />} />
            </Routes>
    </Router>
  )
}

export default App
