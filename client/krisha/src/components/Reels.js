import React from 'react'


const reels={
    position:"relative", 
    backgroundColor: "white",
    width:"100%",
    height:"100%",
    scrollSnapType: "start"
}
const reels_player={
  objectFit: "fill",
  width:"100%",
  height:"100%"
}

export default function Reels() {
  return (
    <div style={reels}>
      <div style={reels_player}>
    
        <img src='https://media.licdn.com/dms/image/D4D03AQESxCBkSBsJwA/profile-displayphoto-shrink_800_800/0/1689398953013?e=2147483647&v=beta&t=00kbeurX70j9mF0VpjjIhW8vJg0bGDe5JYV-CNzBoPw' alt='change to video'/>
    
    {/* <video
    className='reels_player' 
    controls 
    loop 
    >
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

</div>
    </div>
  )
}
