import React from 'react'
import Music from '../Components/Music'
import Playlist from './Playlists'
import '../index.css';
import BreakupSongs from './BreakupSongs';

import Newreleases from './Newreleases';
import Treanding from './Treanding';
import Artists from './Artists';
import Hitlist from './Hitlist';


const Homepage = () => {

  return (
    <div >
      
      <h3 className='mb-2 mt-2 fontStyle'>Trending:</h3> 

      <Treanding/>
      <h3 className='mb-3 mt-4 fontStyle'>New releases:</h3>
      <Newreleases/>

      <h3 className='mb-3 mt-4 fontStyle'>Aritists:</h3>
    <Artists/>

      <h3 className='mb-3 mt-5 fontStyle'>Top Hitlist:</h3>
      <Hitlist/>
        </div>
  )
}

export default Homepage