import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

const Music = () => {

    var img = {
        height:"100px",
        width:"100px"
      }
      var player = {
        width:"300px",
      }
      var rap ={

      width:"200px",
      height:"30px",
      }
  return (
    <div>




<div  className='shadow border border-white border-opacity-25  me-1 ms-2'>

        <div className='App shadow col-lg-4 col-md-8  p-3'> 
        <div className='d-flex'>

        <img className='border-danger border' style={img} src='https://naasongslyrics.com/wp-content/uploads/2023/02/Ravanasura-2023.jpg'/> 

        <div className='App mx-auto align-items-center mt-2 ms-2'>

        <h5 className='m-0 p-0'>Pyar Lona Pagal</h5>

        <p className='m-0 p-0' style={{fontWeight:"200"}}>Ravanasura | RaviTeja</p>

        <ReactAudioPlayer src='/Songs/PLP.mp3' style={rap}  controls className='mx-auto App mb-0'/>
          
        </div>
        </div>
        </div>   
      
    </div>





    </div>
  )
}

export default Music