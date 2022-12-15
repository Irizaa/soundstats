import {React} from 'react'
import { useState, useEffect } from 'react'
import './TrackList.css'
import { getTop, setAccessToken } from '../../Utils/Spotify'

const TrackList = () => {
  const [trackData, setTrackData] = useState(null)
  const resultType = window.location.pathname.split('/')[2]
  const urlParams = new URLSearchParams(window.location.search)

  const fetchResults = async (type, range) => {   
    await getTop(type, range)
    .then(response => {  
      sessionStorage.setItem(`${range}_${type}`, JSON.stringify(response.data))
      setTrackData(JSON.parse(sessionStorage.getItem(`${range}_${type}`)))
    })
    .catch(error => console.log(error))
  }
  useEffect(() => {
    setAccessToken()
    let timeRange = urlParams.get('time_range')
    if(urlParams.get('time_range') === null) timeRange = 'short_term'

    if(!sessionStorage.getItem(`${timeRange}_${resultType}`)) {
      fetchResults(resultType, timeRange) 
    }
    setTrackData(JSON.parse(sessionStorage.getItem(`${timeRange}_${resultType}`)))
  }, [])
  console.log(trackData)

  return (
    <div>
      <h3>Top Songs</h3>
      <div id = 'top-songs'>
        <ul>
          {trackData?.items.map(song => (
            <li key={song.id}>
              <p>{song.name}</p>
              <p></p>
              <p>{}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TrackList