import React from 'react'
import Navbar from '../../../../Components/Navbar'
import RangeSelector from '../../../../Components/RangeSelector'
import { setAccessToken } from '../../../../Utils/Spotify'

const Artists = () => {
  setAccessToken()
  return (
    <div className = "tracks-body">
      <Navbar/>
      <RangeSelector/>
    </div>
  )
}

export default Artists