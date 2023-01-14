import React from 'react'
import './LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <div id = 'loading-screen'>
      <div className = 'lds-ripple'><div></div><div></div></div>
      <p id = 'loading-text'>spotting your spotify info</p>
    </div>
  )
}

export default LoadingScreen