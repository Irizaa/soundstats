import React, { useEffect } from 'react'
import { getResultType, logOut } from '../../Utils/Spotify'
import './Navbar.css'

const Navbar = () => {

  useEffect(() => {
    const resultType = getResultType()

    if (resultType === 'tracks' || resultType === 'artists') {
      document.getElementById(`nav-element-${resultType}`).style.color = 'whitesmoke'
      import('./NavbarNoLogout.css')
    }
  }, [])

  return (
      <nav className = 'navbar'>   
        <div className = 'navbar-links'>
          <ul>
            <a id = 'nav-element-title' href='/results'>soundstats</a>
            <a id = 'nav-element-tracks' href='/results/tracks'>tracks</a>
            <span id = 'divider'> | </span>
            <a id = 'nav-element-artists' href='/results/artists'>artists</a>
            <p id = 'nav-element-logout' onClick = {logOut}>logout</p>
          </ul>
        </div>
      </nav>
  )
}
export default Navbar