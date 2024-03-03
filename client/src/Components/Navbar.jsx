import React from 'react';
import { Link } from "react-scroll";
import '../Styles/Navbarstyles.css';

export default function Navbar() {
    return (
        <nav className='p-20'>
            <div className='text-white flex justify-between text-xl'>
                <Link
                    activeClass='active'
                    to="herosection"
                    spy={true}
                    smooth={true}
                    offset={-500}
                    duration={550}
                    className='font-bold text-3xl tracking-wider'
                >
                    CraveQuest
                </Link>
                <ul className='flex gap-10'>
                    <a> <Link
                        activeClass='active'
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={600}
                        className='relative text-xl w-fit block after:block after:content-[""] after:ab"solute after:h-[3px] after:bg-amber-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left'
                    >
                        About
                    </Link></a>
                    <Link
                        activeClass='active'
                        to="explore"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className='relative text-xl w-fit block after:block after:content-[""] after:ab"solute after:h-[3px] after:bg-amber-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left'
                    >
                        Explore
                    </Link>
                    <Link
                        activeClass='active'
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Get Started!
                    </Link>
                    <li>Login</li>
                </ul>
            </div>
        </nav>
    )
}
