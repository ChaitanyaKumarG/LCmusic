import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom'


const Newreleases = () => {

  var cover ={
    height: "130px",
    width: "130px",
   }

  return (
    <div>



<div className='d-flex x-scroller fontStyle'>


<Link to='/DusseraSongs' className='col-lg-3 ms-2 mx-auto h-25 me-3 text-decoration-none text-white text-opacity-50'>
<div className='' >
<div className=' App '>
<img style={cover}  src='https://naasongs.com.co/wp-content/uploads/2022/10/Dasara-2023.jpg'/>
<h5>Dusshera</h5>
</div>
</div>
</Link>


<Link to='/TamilSongs' className='col-lg-3 mx-auto h-25 me-3  text-decoration-none  text-white text-opacity-50'>
<div className='' >
<div className='App'>
<img style={cover}  src='https://naasongs.com.co/wp-content/uploads/2022/09/Sir-2022.jpg'/>
<h5>Sir</h5>
</div>
</div>
</Link>


<Link to='/EnglishSongs' className='col-lg-3 mx-auto h-25  me-3 text-decoration-none  text-white text-opacity-50'>
<div className='' >
<div className=' App'>
<img style={cover}  src='https://naasongs.com.co/wp-content/uploads/2022/10/Dhamki-2022-1.jpg'/>
<h5>Das ka Dhamki</h5>
</div>
</div>
</Link>


<Link to='/BreakupSongs' className='col-lg-3  mx-auto h-25 me-2 text-decoration-none  text-white text-opacity-50'>
<div className='' >
<div className='App'>
<img style={cover}  src='https://naasongs.com.co/wp-content/uploads/2023/03/Ravanasura-2023.jpg'/>
<h4>Ravanasura</h4>
</div>
</div>
</Link>



</div>








    </div>
  )
}

export default Newreleases