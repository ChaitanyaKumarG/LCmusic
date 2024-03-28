import React from 'react'
import { Link } from 'react-router-dom'

const Hitlist = () => {
  
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
    <img style={cover}  src='https://th.bing.com/th/id/OIP.MQM9f4u-FN6eVyc-JqdcRAAAAA?w=141&h=166&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
    <h5>Tollywood Hitlist</h5>
    </div>
    </div>
    </Link>
    
    
    <Link to='/TamilSongs' className='col-lg-3 mx-auto h-25 me-3  text-decoration-none  text-white text-opacity-50'>
    <div className='' >
    <div className='App'>
    <img style={cover}  src='https://th.bing.com/th/id/OIP.eGiY6iIDl5IQEB8NO6_IswHaHa?w=182&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
    <h5>Bollywood Hitlist</h5>
    </div>
    </div>
    </Link>
    
    
    <Link to='/EnglishSongs' className='col-lg-3 mx-auto h-25  me-3 text-decoration-none  text-white text-opacity-50'>
    <div className='' >
    <div className=' App'>
    <img style={cover}  src='https://th.bing.com/th/id/OIP.A0O8yXQVu6tEOJowDvoLEwHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
    <h5>Kollywood Hitlist</h5>
    </div>
    </div>
    </Link>
    
    
    <Link to='/BreakupSongs' className='col-lg-3  mx-auto h-25 me-2 text-decoration-none  text-white text-opacity-50'>
    <div className='' >
    <div className='App'>
    <img style={cover}  src='https://th.bing.com/th/id/OIP.-QPSMFtMUwzi4jDSkFzeHAHaHa?w=182&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
    <h4 className='m-3'>Sandalwood Hitlist</h4>
    </div>
    </div>
    </Link>
    
    
    
    </div>
    
    
    
    
    
    
    
    
        </div>
      )
}

export default Hitlist