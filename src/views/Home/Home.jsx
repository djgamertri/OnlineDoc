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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            tenetur doloremque molestias repellat minus asperiores in aperiam
            dolor, quaerat praesentium.
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam tenetur doloremque molestias repellat minus asperiores
              in aperiam dolor, quaerat praesentium. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatibus, repudiandae! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Provident
              quibusdam doloremque ex? Officia atque ab dolore? Tempore totam
              non ea!
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div className='footer'>
          <div className='footer-links'>
            <h3>Links</h3>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Doctors</a>
              </li>
              <li>
                <a>Appointments</a>
              </li>
              <li>
                <a>Notifications</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Profile</a>
              </li>
            </ul>
          </div>
          <div className='social'>
            <h3>Social links</h3>
            <ul>
              <li className='facebook'>
                <li
                  href='https://www.facebook.com/'
                  target='_blank'
                  rel='noreferrer'
                />
              </li>
              <li className='youtube'>
                <a
                  href='https://www.youtube.com/'
                  target='_blank'
                  rel='noreferrer'
                />
              </li>
              <li className='instagram'>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  rel='noreferrer'
                />
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
