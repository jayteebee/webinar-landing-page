import React from 'react'



const HSVideoComponent = ({video}) => {
  return (
    <div>
      <video src={video} 
      autoPlay loop muted
      />
    </div>
  )
}

export default HSVideoComponent
