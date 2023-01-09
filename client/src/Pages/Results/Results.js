import './Results.css'
import React, { useEffect} from 'react'
import { setAccessToken } from '../../Utils/Spotify';
import BGCoffee from '../../Assets/BGCoffee.mp4'
import BGPiano from '../../Assets/BGPiano.mp4'
import Navbar from '../../Components/Navbar';

const Results = () => {
    
    useEffect(() => {
      setAccessToken()
      window.history.pushState('','', '/results')
    }, [])
    
    return (
      <>
        <div className = "overlay"/>
        <video className = "results-video" src = {BGCoffee} autoPlay loop muted/>
        <video className = "results-video" src = {BGPiano} autoPlay loop muted/>
        <div className = "logout">
          <Navbar/>
        </div>
        <div className="results-content">
          <h1 className = "tracks-text"><a href="/results/tracks">tracks</a></h1>
          <h2 className = "artists-text"><a href="/results/artists">artists</a></h2><br/>
          <p className = "left-text">your favorite songs of</p>
          <p className = "right-text">the ones who got</p><br/>
          <p className = "left-text">past and present.</p>
          <p className = "right-text">you this far.</p>
        </div>
      </>
    )
}

export default Results