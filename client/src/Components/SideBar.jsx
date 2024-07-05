import React from 'react'
import { ChevronFirst } from 'lucide-react'
import { LogOut } from 'lucide-react'
export default function SideBar() {
  return (
    <aside className='h-screen bg-violet-400'>
      <nav className='h-full flex flex-col bg-white border-r shadow-md'>
        <div className='p-4 pb-2 flex justify-between items-center gap-4'>
          <img src='https://img.logoipsum.com/243.svg' className='w-32' alt=''></img>
          <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
            <ChevronFirst />
          </button>
        </div>

        <ul></ul>
        <div className='flex p-4 border-t'>
          <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png' alt=''
            className='w-10 h-10 rounded-lg'></img>
            <div className='flex justify-between items-center w-52 ml-3'>
              <div className='leading-4'>
                <h4 className='font-semibold'>John Doe</h4>
                <span className='text-xs text-gray-600'>johndoe@gmail.com</span>
              </div>
              <button onClick={handleLogout}>
              <LogOut/>
              </button>
            </div>
        </div>
      </nav>
    </aside>
  )
}
