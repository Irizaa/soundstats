import React from 'react'
import GenreList from '../../../../Components/GenreList';
import Navbar from '../../../../Components/Navbar';
import RangeSelector from '../../../../Components/RangeSelector';

const Genres = () => {

    return (
      <div className = 'top-results-body'>
        <Navbar/>
        <RangeSelector/>
        <GenreList/>
      </div>
      );
}

export default Genres