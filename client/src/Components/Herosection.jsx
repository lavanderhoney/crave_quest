import React from 'react';
import img1 from '../Assets/hero-img1.jpg';
import Explore from './Explore';
import About from './About';
export default function Herosection() {
    return (
        <>
            <div id='herosection' className='flex pt-10 pb-20 justify-around h-[600px] items-center'>
                <div className='grid place-content-center'>
                    <h1 className="text-6xl text-left text-white">Discover the recipes</h1>
                    <h1 className="text-6xl text-left text-white">you're craving now!</h1>
                </div>
                <div>
                    <img className='w-[420px] h-[420px] m-[8px]' src={img1} alt='lasgna' />
                </div>
            </div>
            <About />
            <Explore />
        </>
    )
}
