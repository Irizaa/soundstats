import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getTimePeriod, getTopGenres, setAccessToken } from '../../Utils/Spotify'
import './GenreList.css'

const GenreList = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [genreData, setGenreData] = useState(null)
    const location = useLocation()
    const timeRange = getTimePeriod()

    let genreCount  = {}
    const fetchResults = async (range) => {   
        await getTopGenres(range)
        .then(response => {  
          const data = response.data.items
          data.forEach(artist  => {
            artist.genres.forEach(genre => {
                if(!genreCount[genre]) {
                    genreCount[genre] = {count: 1, images: [artist.images[0].url]}
                } else {
                    genreCount[genre].count++
                    genreCount[genre].images.push(artist.images[0].url)
                }
            })
          })
          let sortedGenres = Object.keys(genreCount).sort((a,b) => genreCount[b].count - genreCount[a].count)
          sessionStorage.setItem(`${range}_genres`, JSON.stringify(sortedGenres.map(genre=>({genre,count:genreCount[genre].count, 
            images:genreCount[genre].images.slice(0, 5)})).filter(item => item.count >=2).slice(0, 10)))
            setIsLoading(false)

        })
        .catch(error => console.log(error))
    }
    useEffect(() => {
        setAccessToken()
        if(!sessionStorage.getItem(`${timeRange}_genres`)) {
            setIsLoading(true)
            fetchResults(timeRange) 
          }
        if(!isLoading) document.getElementById('top-songs').scrollTop = 0
        setGenreData(JSON.parse(sessionStorage.getItem(`${timeRange}_genres`)))
    }, [timeRange, isLoading, location])

    if (isLoading && !sessionStorage.getItem(`${timeRange}_genres`)) {
        return (
            <div className = 'lds-facebook'><div></div><div></div><div></div></div>
        );
      }
    return (
        <div>
          <div id = 'top-songs'>
            <ul>
              {genreData?.map((genre, index) => (
                <li id = 'genre-box' key = {genre.genre}>
                  <p id = 'genre-index'>{index + 1}</p>
                  {genre.images.map((image, index) => (
                    <img id = 'circular-image' alt = 'album' src = {image}></img>
                  ))}
                  <div id = 'genre-info'>
                    <p id = 'genre-name'>{genre.genre}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }


export default GenreList