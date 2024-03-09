import React from 'react';
import { Link } from "react-router-dom";
import './Styles/Navbarstyles.css';
import Button from './Components/Button';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

export default function Navbar() {
    return (
        <>
            <nav className='p-10'>
                <div className='text-white flex justify-between items-center text-[20px]'>
                    <Link
                        to="/"
                        smooth={true}
                        offset={-500}
                        duration={550}
                        className='font-bold text-[30px] tracking-wider'
                    >
                        CraveQuest
                    </Link>
                    <div className='flex gap-12 justify-center items-center'>
                        <Link
                            to="/about"
                            className='relative text-xl w-fit block after:block after:content-[""] after:ab"solute after:h-[3px] after:bg-amber-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left'
                        >
                            About
                        </Link>
                        <Link
                            to="/explore"
                            className='relative text-xl w-fit block after:block after:content-[""] after:ab"solute after:h-[3px] after:bg-amber-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left'
                        >
                            Explore
                        </Link>
                        <Link to="/signup">
                            <Button text="Get Started!" bgColor="bg-white" textColor="text-red-500" />
                        </Link>
                        <Link to="/login"> <Button text="Login" /></Link>
                    </div>
                </div>
            </nav>

        </>
    )
}
