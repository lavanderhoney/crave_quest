import React from 'react'
import './App.css';
import Herosection from './Components/Herosection'
import Navbar from './Navbar'
import About from './Components/About'
import Explore from './Components/Explore'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
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
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
