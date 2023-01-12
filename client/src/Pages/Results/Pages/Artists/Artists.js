import { React, useEffect } from 'react'
import ArtistList from '../../../../Components/ArtistList'
import Navbar from '../../../../Components/Navbar'
import RangeSelector from '../../../../Components/RangeSelector'
import { setAccessToken } from '../../../../Utils/Spotify'

const Artists = () => {

  useEffect(() => {
    setAccessToken()
  }, [])

  return (
    <div className = 'top-results-body'>
      <Navbar/>
      <RangeSelector/>
      <ArtistList/>
    </div>
  )
}

export default Artists