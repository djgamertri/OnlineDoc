import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

function SideBar () {
  return (
    <div className='Navegation'>
      <div className='Logo'>
        <i class='bx bx-plus-medical' />
        <h1>OnlineDoc</h1>
      </div>
      <nav>
        <ul>
          <li><NavLink to='/dashboard'><i class='bx bxs-bar-chart-alt-2' /> Overview </NavLink></li>
          <li><NavLink to='/book'><i class='bx bxs-book-content' /> Book </NavLink></li>
          <li><NavLink to='/doc'><i class='bx bxs-user' /> Doctors </NavLink></li>
          <li><NavLink to='/logout'><i class='bx bxs-exit' /> Exit </NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
