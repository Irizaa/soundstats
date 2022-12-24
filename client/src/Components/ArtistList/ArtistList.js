import { React, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { getResultType, getTimePeriod, getTop, setAccessToken} from '../../Utils/Spotify'
import './ArtistList.css'

const ArtistList = () => {
    const [artistData, setArtistData] = useState(null)
    const location = useLocation()

    const fetchResults = async (type, range) => {   
        await getTop(type, range)
        .then(response => {  
          sessionStorage.setItem(`${range}_${type}`, JSON.stringify(response.data))
          setArtistData(JSON.parse(sessionStorage.getItem(`${range}_${type}`)))
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
        setArtistData(JSON.parse(sessionStorage.getItem(`${timeRange}_${resultType}`)))
      }, [location])
      return (
        <div>
          <div id = 'top-songs'>
            <ul>
              {artistData?.items.map(artist => (
                <li id = 'song-box' key = {artist.id}>
                  <img id = 'track-image' alt = 'album' src = {artist.images[0].url}></img>
                  <div>
                    <p id = 'song-name'>{artist.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

export default ArtistList