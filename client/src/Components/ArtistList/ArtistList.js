import { React, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { getResultType, getTimePeriod, getTop, setAccessToken} from '../../Utils/Spotify'
import './ArtistList.css'

const ArtistList = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [artistData, setArtistData] = useState(null)
    const location = useLocation()
    const timeRange = getTimePeriod()
    const resultType = getResultType()

    const fetchResults = async (type, range) => {   
        await getTop(type, range)
        .then(response => {  
          sessionStorage.setItem(`${range}_${type}`, JSON.stringify(response.data))
          setArtistData(JSON.parse(sessionStorage.getItem(`${range}_${type}`)))
          setIsLoading(false)
        })
        .catch(error => console.log(error))
      }

    useEffect(() => {
        setAccessToken()
        if(!sessionStorage.getItem(`${timeRange}_${resultType}`)) {
          setIsLoading(true)
          fetchResults(resultType, timeRange) 
        }
        if(!isLoading) document.getElementById('top-songs').scrollTop = 0
        setArtistData(JSON.parse(sessionStorage.getItem(`${timeRange}_${resultType}`)))

      }, [location, resultType, timeRange, isLoading])

      if (isLoading && !sessionStorage.getItem(`${timeRange}_${resultType}`)) {
        return (
            <div className = 'lds-facebook'><div></div><div></div><div></div></div>
        );
      }
      return (
        <div>
          <div id = 'top-songs'>
            <ul>
              {artistData?.items.map((artist, index) => (
                <li id = 'artist-box' key = {artist.id}>
                   <a href = {artist.external_urls.spotify} target = "_blank" rel = "noreferrer">
                    <img id = 'artist-image' alt = 'album' src = {artist.images[0].url}></img>
                   </a>
                  <p id = 'song-index'>{index + 1}</p>
                  <div id = 'artist-info'>
                    <p id = 'artist-info-name'>{artist.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
export default ArtistList