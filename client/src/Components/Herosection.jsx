import React from 'react';
import img1 from '../Assets/hero-img1.jpg';
export default function Herosection() {
    return (
        <div id='herosection' className='flex pt-10 pb-20 justify-around'>
            <div className='grid place-content-center'>
                <h1 className="text-6xl text-left text-white">Discover the recipes</h1>
                <h1 className="text-6xl text-left text-white">you're craving now!</h1>
            </div>
            <div className='rounded-[20px] ring-4'>
                <img className='w-[400px] h-[400px] m-[8px]' src={img1} alt='lasgna' />
            </div>
        </div>
    )
}
