import React, { useEffect } from 'react'
import { logOut } from '../../Utils/Spotify'
import './Navbar.css'

const Navbar = () => {

  
  useEffect(() => {
    const currPage = window.location.pathname.split('/')[2]

    if (currPage === 'tracks' || currPage === 'artists') {
      document.getElementById(`nav-element-${currPage}`).style.color = 'whitesmoke'
      import('./NavbarNoLogout.css')
    }
  }, [])

  return (
      <nav className = "navbar">   
        <div className = "navbar-links">
          <ul>
            <a id = "nav-element-title" href='/results'>soundstats</a>
            <a id = "nav-element-tracks" href='/results/tracks'>tracks</a>
            <span id = "divider"> | </span>
            <a id = "nav-element-artists" href='/results/artists'>artists</a>
            <p id = "nav-element-logout" onClick = {logOut}>logout</p>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar