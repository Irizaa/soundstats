import { React, useState, useEffect } from 'react'
import './TrackList.css'
import { getResultType, getTimePeriod, getTop, setAccessToken } from '../../Utils/Spotify'
import { useLocation } from 'react-router-dom';
const TrackList = () => {

  const [trackData, setTrackData] = useState(null)
  const location = useLocation()

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
    document.getElementById('top-songs').scrollTop = 0
    const timeRange = getTimePeriod()
    const resultType = getResultType()
    
    if(!sessionStorage.getItem(`${timeRange}_${resultType}`)) {
      fetchResults(resultType, timeRange) 
    }
    document.getElementById(timeRange).style.color =  'whitesmoke'
    setTrackData(JSON.parse(sessionStorage.getItem(`${timeRange}_${resultType}`)))
  }, [location])

  return (
    <div>
      <div id = 'top-songs'>
        <ul>
          {trackData?.items.map((song, index) => (
            <li id = 'song-box' key = {song.id}>
              <img id = 'track-image' alt = 'album' src = {song.album.images[0].url}></img>
              <p id = 'song-index'>{index + 1}</p>
              <div id = 'song-info'>
                <p id = 'song-name'>{song.name}</p>
                <p id = 'artist-name'>{song.artists[0].name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TrackList