import './Results.css'
import React, { useEffect, useState} from 'react'
import { setAccessToken } from '../../Utils/Spotify';
import BGCoffee from '../../Assets/BGCoffee.mp4'
import BGPiano from '../../Assets/BGPiano.mp4'
import Navbar from '../../Components/Navbar';
import LoadingScreen from '../../Components/LoadingScreen';

const Results = () => {

  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
      setAccessToken()
      window.history.pushState('','', '/results')
    }, [])

    if(isLoading) {
      return (
        <>
        <LoadingScreen/>
        <video className = 'results-video' src = {BGCoffee} autoPlay loop muted/>
        <video className = 'results-video' src = {BGPiano} autoPlay loop muted/>
        </>
      )
    }
    return (
        
      <div id = 'results-page'>
        <div className = 'overlay'/>
        <video className = 'results-video' src = {BGCoffee} autoPlay loop muted/>
        <video className = 'results-video' src = {BGPiano} autoPlay loop muted/>
        <div id = 'nav-space'>
          <Navbar/>
        </div>
        <div id = 'results-content'>
          <h1 id = 'results-tracks-text'><a href='/results/tracks'>tracks</a></h1>
          <h2 id = 'results-artists-text'><a href='/results/artists'>artists</a></h2><br/>
          <p className = 'results-left-text'>your favorite songs of</p>
          <p className = 'results-right-text'>the ones who got you</p><br/>
          <p className = 'results-left-text'>past and present.</p>
          <p className = 'results-right-text'>this far.</p>
        </div>
      </div>
    )
}

export default Results