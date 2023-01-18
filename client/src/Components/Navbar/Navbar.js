import React, { useEffect, useState } from 'react'
import { getResultType, logOut } from '../../Utils/Spotify'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const [resultType, setResultType] = useState(getResultType)
  const changeType = (type) => {
    navigate(`/results/${type}`)
    setResultType(type)
  }

  useEffect(() => {
    const resultType = getResultType()
    document.getElementById('nav-selector').addEventListener('change', function() {
      changeType(this.value)
    })
    if (resultType === 'tracks' || resultType === 'artists' || resultType === 'genres') {
      document.getElementById(`nav-element-${resultType}`).style.color = 'whitesmoke'
      if (window.matchMedia("(max-width: 450px)").matches) {
        document.getElementById('nav-element-logout').style.display = 'none'
    }
    } else {
      document.getElementById('nav-selector').style.display = 'none'
    }
  }, [])

  return (
    <>
      <nav className = 'navbar'>   
        <div className = 'navbar-links'>
          <ul>
            <li id = 'nav-element-title' onClick={() => {changeType('')}}>
              soundstats
            </li>

            <select id= 'nav-selector' value={resultType}>
              <option value='tracks'>tracks</option>
              <option value='artists'>artists</option>
              <option value='genres'>genres</option>
            </select>
            <li id = 'nav-element-tracks' onClick={() => {changeType('tracks')}}>
              tracks
            </li>
            <span className = 'divider'> | </span>
            <li id = 'nav-element-artists' onClick={() => {changeType('artists')}}>
              artists
            </li>
            <span className = 'divider'> | </span>
            <li id = 'nav-element-genres' onClick={() => {changeType('genres')}}>
              genres
            </li>
            <p id = 'nav-element-logout' onClick = {logOut}>log-out</p>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar