import React from 'react'
import Herosection from '../Components/Herosection'
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Explore from '../Components/Explore'
export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Herosection />
            <About />
            <Explore />
        </>
    )
}
