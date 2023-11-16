import React from 'react'
import SideBar from '../components/Sidebar/SideBar'
import './dashboard.css'

function dashboard ({ children }) {
  return (
    <div>
      <SideBar />
      <div className='main'>
        <div className='content'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default dashboard
