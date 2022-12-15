import {React} from 'react'
import { useState, useEffect } from 'react'
import './TrackList.css'
import { getTop, setAccessToken } from '../../Utils/Spotify'
import { useLocation } from 'react-router-dom';
const TrackList = () => {

  const [trackData, setTrackData] = useState(null)
  const resultType = window.location.pathname.split('/')[2]
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
    const urlParams = new URLSearchParams(location.search)
    let timeRange = urlParams.get('time_range')
    if(urlParams.get('time_range') === null) timeRange = 'short_term'

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
          {trackData?.items.map(song => (
            <li id = 'song-box' key = {song.id}>
              <img id = 'track-image' src = {song.album.images[0].url}></img>
              <div>
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