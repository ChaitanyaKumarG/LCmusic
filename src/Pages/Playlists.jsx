import React from 'react'
import { Link } from 'react-router-dom'

const Playlist = () => {
   var cover ={
      height: "130px",
      width: "130px",
      borderRadius:"50%"
   }
  return (
    <div className='text-white'>


        <div className='d-flex x-scroller '>


        <Link to='/ItemSongs' className='col-lg-3 ms-2 mx-auto h-25 me-2 text-decoration-none'>
        <div className='' >
        <div className=' App '>
        <img style={cover}  src='https://blogger.googleusercontent.com/img/a/AVvXsEgS55mldxPjUhci_6LzDkE3KUjrIX4SCLHrgzVcJyhm2EYuKDHbFmBco0WhUU9mYDr5GwFhOIjsfHa68amD9Hnz4X6ZFhMxRtweKATyr_L9anoc-NolCWbzQ7SaX6RsZhaUfmDrl7qhvDP0dQ31UBlllBcpNa4_Ns3Kymxnt86iEodrhIEZObTAIMc1rA'/>
        <h4>Mass</h4>
        </div>
        </div>
        </Link>


       <Link to='/BreakupSongs' className='col-lg-3  mx-auto h-25 me-2 text-decoration-none  text-white'>
       <div className='' >
        <div className='App'>
        <img style={cover}  src='https://www.downloadclipart.net/large/break-up-png-pic.png'/>
        <h4>Breakup</h4>
        </div>
        </div>
       </Link>
       
      



       <Link to='/EnglishSongs' className='col-lg-3 mx-auto h-25  me-2 text-decoration-none  text-white'>
        <div className='' >
        <div className=' App'>
        <img style={cover}  src='https://th.bing.com/th/id/OIP.O74Pol3EHGz2F4lWHjHRFQHaHB?pid=ImgDet&rs=1'/>
        <h4>English</h4>
        </div>
        </div>
</Link>


        <Link to='/TamilSongs' className='col-lg-3 mx-auto h-25 me-2  text-decoration-none  text-white'>
        <div className='' >
        <div className='App'>
        <img style={cover}  src='https://th.bing.com/th/id/OIP.Y4sQEIpu2bVku0ZY32OBEwHaGn?pid=ImgDet&rs=1'/>
        <h4>Tamil</h4>
        </div>
        </div>
        </Link>

        </div>
    </div>
  )
}

export default Playlist