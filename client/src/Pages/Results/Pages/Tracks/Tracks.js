import './Tracks.css'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../../Components/Navbar'
import { setAccessToken } from '../../../../Utils/Spotify'
import { getTop } from '../../../../Utils/Spotify'
import RangeSelector from '../../../../Components/RangeSelector/'
import TrackList from '../../../../Components/TrackList'

const Tracks = () => {

  useEffect(() => {
    setAccessToken()
  }, [])
  
  return (
    <div className = "tracks-body">
      <Navbar/>
      <RangeSelector/>
      <TrackList/>
    </div>
  )
}

export default Tracks