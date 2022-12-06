import React from 'react'
import './Home.css'
import BGVideo from '../../Assets/BGVideo.mp4'
import button from '../../Assets/spotifybutton.png'

const Home = () => {
  return (
    <>
      <div className = "overlay"/>
      <video className = "home-video"src = {BGVideo} autoPlay loop muted/>
      <div className="home-content">
        <h1 className = "home-text">soundstats</h1>
        <a href = "http://localhost:3001/login">
          <img alt = "spotify" src = {button} width = '350vw'/>
        </a>
      </div>
    </>
  )
}

export default Home