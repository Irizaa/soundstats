import React from 'react'
import ArtistList from '../../../../Components/ArtistList'
import Navbar from '../../../../Components/Navbar'
import RangeSelector from '../../../../Components/RangeSelector'
import { setAccessToken } from '../../../../Utils/Spotify'

const Artists = () => {
  setAccessToken()
  return (
    <div className = "tracks-body">
      <Navbar/>
      <RangeSelector/>
      <ArtistList/>
    </div>
  )
}

export default Artists