import './Tracks.css'
import React from 'react'
import Navbar from '../../../../Components/Navbar'
import { setAccessToken } from '../../../../Utils/Spotify'

type track = {
  songURL: 'string'
  imageURL: 'string'
  trackName: 'string'
  artistName: 'string'
};

const Tracks = () => {
  setAccessToken()
  return (
    <div className = "tracks-body">
      
    </div>
  )
}

export default Tracks