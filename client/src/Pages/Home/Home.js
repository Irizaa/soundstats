import React from 'react'
import './Home.css'
import BGVideo from '../../Assets/BGVideo.mp4'
import button from '../../Assets/spotifybutton.png'
import { isLoggedIn } from '../../Utils/Spotify'

const Home = () => {

  return (
    <>
      <div className = 'overlay'/>
      <video id = 'home-video'src = {BGVideo} autoPlay loop muted/>

      <div id = 'home-content'>
        <h1 id = 'home-text'>soundstats</h1>
        <a href = 'http://localhost:3001/login'>
          <img alt = 'spotify' src = {button} width = '350vw'/>
        </a>
      </div>
      
    </>
  )
}

export default Home