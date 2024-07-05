import React from 'react'
import SideBar from './SideBar'
import UserMain from '../Pages/UserMain'

export default function UserProfile() {
  return (
    <div className='flex flex-row'>
      <SideBar/>
      <UserMain/>
    </div>
  )
}
