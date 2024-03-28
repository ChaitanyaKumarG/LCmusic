import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

const DusseraSongs = () => {
    var img = {
        height:"100px",
        width:"100px"
      }
      var rap ={

      width:"200px",
      height:"35px",
      marginTop:"2px"
      }
      var bgdark = {
        backgroundColor:"black",
        height:"100vh"
      }
  return (
    <div style={bgdark}>




<div  className='shadow  border border-white border-opacity-25  me-1 ms-2 mb-5 mt-5 '>

        <div className='App shadow col-lg-4 col-md-8  p-3 mx-auto'> 
        <div className='d-flex '>

        <img className='border-danger border' style={img} src='https://naasongs.com.co/wp-content/uploads/2022/10/Dasara-2023.jpg'/> 

        <div className='App mx-auto align-items-center mt-2 ms-4'>

        <h5 className='m-0 p-0'> Dhoom Dham Dhosthan</h5>

        <p className='m-0 p-0' style={{fontWeight:"200"}}>Ravanasura | RaviTeja</p>

        <ReactAudioPlayer src='/Songs/DDD.mp3' style={rap}  controls className='mx-auto App mb-0'/>
          
        </div>
        </div>
        </div>   
      
    </div>


<div  className='shadow border border-white border-opacity-25  me-1 ms-2 mb-5'>

<div className='App shadow col-lg-4 col-md-8  p-3 mx-auto'> 
<div className='d-flex '>

<img className='border-danger border' style={img} src='https://naasongs.com.co/wp-content/uploads/2022/10/Dasara-2023.jpg'/> 

<div className='App mx-auto align-items-center mt-2 ms-4'>

<h5 className='m-0 p-0'>Chamkila Angalesi</h5>

<p className='m-0 p-0' style={{fontWeight:"200"}}>Dusshera | Nani</p>

<ReactAudioPlayer src='/Songs/CA.mp3' style={rap}  controls className='mx-auto App mb-0'/>
  
</div>
</div>
</div>   

</div>


<div  className='shadow border border-white border-opacity-25  me-1 ms-2 mb-5'>

<div className='App shadow col-lg-4 col-md-8  p-3 mx-auto'> 
<div className='d-flex '>

<img className='border-danger border' style={img} src='https://naasongs.com.co/wp-content/uploads/2022/10/Dasara-2023.jpg'/> 

<div className='App mx-auto align-items-center mt-2 ms-4'>

<h5 className='m-0 p-0'>Ori Vaari</h5>

<p className='m-0 p-0' style={{fontWeight:"200"}}>Dusshera | Nani</p>

<ReactAudioPlayer src='/Songs/OV.mp3' style={rap}  controls className='mx-auto App mb-0'/>
  
</div>
</div>
</div>   

</div>




    </div>
  )
}

export default DusseraSongs