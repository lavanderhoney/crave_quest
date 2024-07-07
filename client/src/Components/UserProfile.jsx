import React from 'react'
import SideBar, { SideBarItem } from './SideBar'
import UserMain from '../Pages/UserMain'
import { Search, Star, Settings2 } from 'lucide-react'
export default function UserProfile() {
  return (
    <div className='flex flex-row'>
      <SideBar>
        <SideBarItem icon={<Search size={20}/>} text="Find Recipes"/>
        <SideBarItem icon={<Star size={20}/>} text="My Favourites"/>
        <SideBarItem icon={<Settings2 size={20}/>} text="Settings"/>
      </SideBar>
      <UserMain/>
    </div>
  )
}
