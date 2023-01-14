import React, { useEffect } from 'react'
import { getResultType, logOut } from '../../Utils/Spotify'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  
  const changeType = (range) => {
    navigate(range)
  }

  useEffect(() => {
    const resultType = getResultType()
    if (resultType === 'tracks' || resultType === 'artists' || resultType === 'genres') {
      document.getElementById(`nav-element-${resultType}`).style.color = 'whitesmoke'
      import('./NavbarNoLogout.css')
    }
  }, [])

  return (
    <nav className = 'navbar'>   
      <div className = 'navbar-links'>
        <ul>
          <li id = 'nav-element-title' onClick={() => {changeType('/results')}}>
            soundstats
          </li>
          <li id = 'nav-element-tracks' onClick={() => {changeType('/results/tracks')}}>
            tracks
          </li>
          <span className = 'divider'> | </span>
          <li id = 'nav-element-artists' onClick={() => {changeType('/results/artists')}}>
            artists
          </li>
          <span className = 'divider'> | </span>
          <li id = 'nav-element-genres' onClick={() => {changeType('/results/genres')}}>
            genres
          </li>
          <p id = 'nav-element-logout' onClick = {logOut}>logout</p>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar