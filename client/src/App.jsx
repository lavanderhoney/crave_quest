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
import { AuthContextProvider } from './context/AuthContext';
import UserDashboard from './Pages/UserDashboard';
import Protected from './Protected';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Herosection />} />
          <Route path='/about' element={<About />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/userdash' element={<Protected><UserDashboard /></Protected>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
