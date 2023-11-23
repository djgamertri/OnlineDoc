import React, { useContext } from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

function SideBar () {
  const { User } = useContext(UserContext)
  return (
    <div className='Navegation'>
      <div className='Logo'>
        <i className='bx bx-plus-medical' />
        <h1>OnlineDoc</h1>
      </div>
      <nav>
        <ul>
          {
            User.role !== 'Doctor'
              ? null
              : (
                <li><NavLink to='/dashboard'><i className='bx bxs-bar-chart-alt-2' /> Overview </NavLink></li>
                )
          }
          <li><NavLink to='/book'><i className='bx bxs-book-add' /> Book </NavLink></li>
          <li><NavLink to='/My-Book'><i className='bx bxs-book' /> My Book </NavLink></li>
          {
            User.role !== 'Doctor'
              ? null
              : (
                <li><NavLink to='/doctor'><i className='bx bxs-user' /> Doctors </NavLink></li>
                )
          }
          {
          !User ? (<li><NavLink to='/login'><i className='bx bxs-exit' /> Login </NavLink></li>) : null
          }
          <li><NavLink to='/logout'><i className='bx bxs-exit' /> Exit </NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
