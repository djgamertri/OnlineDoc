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
      <section className='hero'>
        <div className='hero-content'>
          <h1>
            Your Health, <br />
            Our Responsibility
          </h1>
          <p>
            Doctors, the unsung heroes of humanity, bravely navigate the realms of illness, stitching hope into the fabric of despair and healing with the gentle touch of compassion.
          </p>
        </div>
        <div className='hero-img'>
          <img
            src='https://github.com/Avinash905/HealthBooker/blob/main/client/src/images/heroimg.jpg?raw=true'
            alt='hero'
          />
        </div>
      </section>
      <section className='container-index'>
        <div className='about'>
          <div className='hero-img'>
            <img
              src='https://github.com/Avinash905/HealthBooker/blob/main/client/src/images/aboutimg.jpg?raw=true'
              alt='hero'
            />
          </div>
          <div className='hero-content'>
            <h1>AboutUs</h1>
            <p>
              Welcome to OnlineDoc, where compassionate care meets cutting-edge expertise in the realm of medical services. Established with a commitment to enhancing lives through health and wellness, we take pride in being your trusted partner on the journey to optimal well-being.
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div className='footer'>
          <div className='footer-links'>
            <h3>Support</h3>
            <ul>
              <li>
                <a>OnlineDoc@gmail.com</a>
              </li>
              <li>
                <a>+1232131312</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          Made by
          <a> Erick Rodriguez </a>
          © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export default Home
