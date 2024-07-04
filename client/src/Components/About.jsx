import React from 'react'

export default function About() {
    return (
        <div id='about' className='bg-rose-100 flex-col h-[500px]'>
            <h2 className='font-bold text-6xl py-5 text-center'>About Me</h2>
            <div className='flex justify-around'>
                <div className='p-10 border-[3px] border-amber-500 h-[300px]'>
                    <h3>Milap Patel</h3>
                    <h3>22BCE186</h3>
                </div>
            </div>
        </div>
    )
}
