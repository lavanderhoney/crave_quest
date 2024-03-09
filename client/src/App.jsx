import React from 'react'
import './App.css';
import Herosection from './Components/Herosection'
import Navbar from './Navbar'
import About from './Components/About'
import Explore from './Components/Explore'
import { Routes, Route } from 'react-router-dom'
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Herosection />} />
        <Route path='/about' element={<About />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
