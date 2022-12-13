import React from 'react'
import './RangeSelector.css'
import { useEffect} from 'react'


const RangeSelector = () => {

  const changeRange = (range) => {
    window.location.href = `/results/${window.location.pathname.split('/')[2]}?time_range=${range}`
  }
  useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search)
    let timeRange = urlParams.get('time_range')
    if(urlParams.get('time_range') === null) timeRange = 'short_term'
    document.getElementById(timeRange).style.color =  'whitesmoke'
  }, [])

  return (
    <nav className = "navbar">   
        <ul id = "monitor-range-selector">
          <li id = "short_term" onClick={() => {changeRange('short_term')}}>
            last 4 weeks
          </li>
          <li id = "medium_term" onClick={() => {changeRange('medium_term')}}>
            last 6 months
          </li>
          <li id = "long_term" onClick={() => {changeRange('long_term')}}>
            all-time
          </li>
        </ul>
    </nav>
)
}


export default RangeSelector