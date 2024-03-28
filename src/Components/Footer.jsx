import React from 'react'

const Footer = () => {
  var FooterStyle = {
    position:"absolute",
    position:"fixed",
    bottom:"0px",
    width:"100%",
    zIndex:"1"
  }
  return (
    <div style={FooterStyle} className='zindex'>
<div className='w-100 bg-black text-white text-opacity-75 d-flex justify-content-evenly p-1'>   
    <p className='m-0 p-0'> © 2023 </p>
     <p className='m-0 p-0'> the GLNCK production</p>
</div>

    </div>
  )
}

export default Footer