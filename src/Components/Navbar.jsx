import React, { useState } from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuIcon from '../menu.png';

const Navbar = () => {
var menu = {
  height:"30px",
  width:"30px"
}
var navstyles ={
  height:"60px",
}
var offacancvas = {
  height :"40px",
  width: "40px",
  marginRight:"5px"
}
const [displaycanvas, setdisplaycanvas] = useState(false)
const [notications, setnotifications] = useState(false)


  return (

    
<div>

  <div className='navbar bg-black text-white text-opacity-75' style={navstyles}>


  <div>
  <img src={MenuIcon} style={menu} className='ms-2 me-2' onClick={()=>{setdisplaycanvas(true)}}/>
  <img src='https://cdn-icons-png.flaticon.com/512/9684/9684551.png' style={menu} onClick={()=>{setnotifications(true)}}/>
  </div>

 <h2 className='me-3'>

 LCmusic
 </h2>


 <Offcanvas show={displaycanvas} onHide={()=>setdisplaycanvas(false)} placement='end' className='App'> 

<OffcanvasHeader closeButton>
 <h3>LCmusic</h3> </OffcanvasHeader>  

<OffcanvasBody>

<div className='App'>


<a href='/BreakupSongs' className='text-decoration-none'>
  <h3 className='text-black mb-5'> <img  style={offacancvas} src='https://www.downloadclipart.net/large/break-up-png-pic.png'/>   Breakup💔</h3>
 </a>
 
  <a href='/ItemSongs' className='text-decoration-none'>
  <h4 className='text-black mb-5'> <img  style={offacancvas} src='https://blogger.googleusercontent.com/img/a/AVvXsEgS55mldxPjUhci_6LzDkE3KUjrIX4SCLHrgzVcJyhm2EYuKDHbFmBco0WhUU9mYDr5GwFhOIjsfHa68amD9Hnz4X6ZFhMxRtweKATyr_L9anoc-NolCWbzQ7SaX6RsZhaUfmDrl7qhvDP0dQ31UBlllBcpNa4_Ns3Kymxnt86iEodrhIEZObTAIMc1rA'/>  Mass_Songs</h4>
</a>
 <a href='/EnglishSongs' className='text-decoration-none'>
  <h4 className='text-black mb-5'> <img  style={offacancvas} src='https://th.bing.com/th/id/OIP.O74Pol3EHGz2F4lWHjHRFQHaHB?pid=ImgDet&rs=1'/>  English_Songs</h4> 
</a>
 <a href='/TamilSongs' className='text-decoration-none'>
  <h4 className='text-black mb-5'> <img  style={offacancvas} src='https://th.bing.com/th/id/OIP.Y4sQEIpu2bVku0ZY32OBEwHaGn?pid=ImgDet&rs=1'/>  Tamil_Songs</h4>
</a>
  </div>
  <p className='bg-black text-white w-100' style={{position:"absolute",bottom:"0px", marginLeft:"-16px"}}>the GLNCK production</p>
</OffcanvasBody>    
 </Offcanvas>


 <Offcanvas show={notications} onHide={()=>setnotifications(false)} placement='top'> 
<OffcanvasHeader closeButton> <h3>Updates: </h3> </OffcanvasHeader>  
<OffcanvasBody>
  <p className='mb-0'>No recent updates</p>
</OffcanvasBody>    
 </Offcanvas>

    </div>

    </div>
  )
}

export default Navbar