import React from 'react';
import { Link } from "react-router-dom";
import './Styles/Navbarstyles.css';
import Button from './Components/Button';
import { UserAuth } from './context/AuthContext';

export default function Navbar() {
    const { user, logOut } = UserAuth();
    console.log("User in nav: ", user);

    const handleLogOut = async () => {
        try {
            console.log("inside handlelogout");
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <nav className='p-10'>
                <div className='text-white flex justify-between items-center text-[20px]'>
                    <Link
                        to="/"
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
                        {user?.displayName != null ? <Button text="Logout" onClick={handleLogOut} /> : <Link to="/signup">
                            <Button text="Get Started!" bgColor="bg-white" textColor="text-red-500" />
                        </Link>}
                        {console.log(user?.displayName)}

                        <Link to="/login"> <Button text="Login" /></Link>
                    </div>
                </div>
            </nav>

        </>
    )
}
