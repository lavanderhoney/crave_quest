import React from 'react'
import Herosection from './Components/Herosection'
import Navbar from './Navbar'
import About from './Components/About'
import Explore from './Components/Explore'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Routes, Route } from 'react-router-dom'
import './index.css';
import { AuthContextProvider, UserAuth } from './context/AuthContext';
import Protected from './Protected';
import UserProfile from './Pages/UserProfile';

function App() {
  // const {user,logOut} = UserAuth();
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
          <Route path='/userdash' element={<Protected>
            <UserProfile />
          </Protected>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
