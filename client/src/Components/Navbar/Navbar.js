import React from 'react'
import { logOut } from '../../Utils/Spotify'


const Navbar = () => {

  const currentPage = window.location.pathname
  if(currentPage === '/results') {
    import('./NavbarResults.css')
  } else if (currentPage === '/results/tracks') {
    import('./NavbarTracks.css')
  } else if (currentPage === '/results/artists') {
    import('./NavbarArtists.css')
  }

  return (
      <nav className = "navbar">   
        <div className = "navbar-links">
          <ul>
            <a className = "nav-element-title" href='/results'>soundstats</a>
            <a className = "nav-element-tracks" href='/results/tracks'>tracks</a>
            <span className = "divider"> | </span>
            <a className = "nav-element-artists" href='/results/artists'>artists</a>
            <p className = "nav-element-logout" onClick = {logOut}>logout</p>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar