import React from 'react'
import './RangeSelector.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTimePeriod, highlightRange } from '../../Utils/Spotify'

const RangeSelector = () => {
  const [timePeriod, setTimePeriod] = useState(getTimePeriod)
  const navigate = useNavigate()
  const timeRange = getTimePeriod()

  const changeRange = (range) => {
    navigate(`?time_range=${range}`)
    setTimePeriod(range)
  }

  useEffect(() => {
    highlightRange(timeRange)
    document.getElementById('mobile-range-selector').addEventListener('change', function() {
      changeRange(this.value)
    })
  })

  return (
    <>
      <select id= 'mobile-range-selector' value={timePeriod}>
        <option value='short_term'>Past 4 weeks</option>
        <option value='medium_term'>Past 6 months</option>
        <option value='long_term'>All-time</option>
      </select>

      <nav className = 'navbar'>   
        <ul id = 'monitor-range-selector'>
          <li id = 'short_term' onClick={() => {changeRange('short_term')}}>
            last 4 weeks
          </li>
          <li id = 'medium_term' onClick={() => {changeRange('medium_term')}}>
            last 6 months
          </li>
          <li id = 'long_term' onClick={() => {changeRange('long_term')}}>
            all-time
          </li>
        </ul>
      </nav>
    </>
  )
}
export default RangeSelector