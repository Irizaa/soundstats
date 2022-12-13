import './Tracks.css'
import React, { useEffect, useState } from 'react'
import Navbar from '../../../../Components/Navbar'
import { setAccessToken } from '../../../../Utils/Spotify'
import { getTop } from '../../../../Utils/Spotify'
import RangeSelector from '../../../../Components/RangeSelector/'

const Tracks = () => {
  const [trackData, setTrackData] = useState(null)

  const fetchResults = async (range) => {   
    await getTop('tracks', range)
    .then(response => {  
        sessionStorage.setItem(`${range}_tracks`, JSON.stringify(response.data))
        setTrackData(JSON.parse(sessionStorage.getItem(`${range}_tracks`)))
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    setAccessToken()

    const urlParams = new URLSearchParams(window.location.search)
    let timeRange = urlParams.get('time_range')
    if(urlParams.get('time_range') === null) timeRange = 'short_term'

    if(!sessionStorage.getItem(`${timeRange}_tracks`)) {
      fetchResults(timeRange) 
    }
    setTrackData(JSON.parse(sessionStorage.getItem(`${timeRange}_tracks`)))
  }, [])
  console.log(trackData)
  
  return (

    <div className = "tracks-body">
      <Navbar/>
      <RangeSelector/>
      {/* <img src = {trackData?.items[0].album.images[1].url} alt = {trackData?.items[0].name}></img> */}
    </div>
  )
}

export default Tracks