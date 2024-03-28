import React from 'react'
import { Link } from 'react-router-dom'

const Artists = () => {
    var cover ={
        height: "130px",
        width: "130px",
        borderRadius:"50%"
     }
    return (
      <div className='text-white'>
  
  
          <div className='d-flex x-scroller '>
  
  
     
        
  
  
  
         <Link to='/EnglishSongs' className='col-lg-3 mx-auto h-25  me-3 text-decoration-none  text-white text-opacity-50'>
          <div className='' >
          <div className=' App'>
          <img style={cover}  src='https://th.bing.com/th/id/OIP.O74Pol3EHGz2F4lWHjHRFQHaHB?pid=ImgDet&rs=1'/>
          <h4>Tentacian</h4>
          </div>
          </div>
  </Link>
  
  
          <Link to='/TamilSongs' className='col-lg-3 mx-auto h-25 me-3  text-decoration-none  text-white text-opacity-50'>
          <div className='' >
          <div className='App'>
          <img style={cover}  src='https://th.bing.com/th/id/OIP.Y4sQEIpu2bVku0ZY32OBEwHaGn?pid=ImgDet&rs=1'/>
          <h4>Anirudh</h4>
          </div>
          </div>
          </Link>



  
  
         <Link to='/BreakupSongs' className='col-lg-3  mx-auto h-25 me-3 text-decoration-none  text-white text-opacity-50'>
         <div className='' >
          <div className='App'>
          <img style={cover}  src='https://th.bing.com/th/id/OIP.UhL3ON6gkKo6CV540SIGjwHaGt?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
          <h4>DSP</h4>
          </div>
          </div>
         </Link>
         
         <Link to='/ItemSongs' className='col-lg-3 ms-2 mx-auto h-25 me-3 text-decoration-none text-white text-opacity-50'>
          <div className='' >
          <div className=' App '>
          <img style={cover}  src='https://th.bing.com/th/id/OIP.C3Tnh-XEGy2VyHUqKYwydwAAAA?w=145&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
          <h4>G.V.Prakash</h4>
          </div>
          </div>
          </Link>
  
          </div>
      </div>
    )
}

export default Artists