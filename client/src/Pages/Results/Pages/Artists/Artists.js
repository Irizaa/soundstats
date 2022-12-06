import React from 'react'
import Navbar from '../../../../Components/Navbar'
import { setAccessToken } from '../../../../Utils/Spotify'

const Artists = () => {
  setAccessToken()
  return (
    <div className = "tracks-body">
      <Navbar/>
    </div>
  )
}

export default Artists