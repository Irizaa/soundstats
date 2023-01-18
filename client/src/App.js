import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Results from './Pages/Results';
import Artists from './Pages/Results/Pages/Artists';
import Tracks from './Pages/Results/Pages/Tracks';
import Genres from './Pages/Results/Pages/Genres';


function App() {

  return (
    
    <Router>
      <Routes>
        {/* <Route path ='/' element = {<Home />}/> */}
        {localStorage.getItem('accessToken') && localStorage.getItem('refreshToken') ? (
        <Route path="*" element = {<Results/>} />
      ) : (
        <Route path="*" element = {<Home/>} />
      )}
        <Route path = '/results' element = {<Results/>}/>
        <Route path = '/results/tracks' element = {<Tracks/>}/>
        <Route path = '/results/artists' element = {<Artists/>}/>
        <Route path = '/results/genres' element = {<Genres/>}/>
      </Routes>
    </Router>
  )
}

export default App;
