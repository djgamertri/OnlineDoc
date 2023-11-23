import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { UserContext } from '../../Context/UserContext'

function Home () {
  const { User } = useContext(UserContext)

  const getLinkDetails = () => {
    if (User && User.role) {
      return User.role === 'Doctor'
        ? { to: '/dashboard', label: 'Dashboard' }
        : { to: '/book', label: 'Book' }
    }
    return { to: '/login', label: 'Login' }
  }

  const linkDetails = getLinkDetails()

  return (
    <div>
      <header>
        <nav className='Navbar'>
          <h1>OnlineDoc</h1>
          <ul>
            <Link to={linkDetails.to} className='Button'>
              {linkDetails.label}
            </Link>
            {User
              ? (
                <Link to='/logout' className='Button'>
                  Logout
                </Link>
                )
              : (
                <>
                  <Link to='/register' className='Button'>
                    Register
                  </Link>
                </>
                )}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Home
