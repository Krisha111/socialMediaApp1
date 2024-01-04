import React from 'react'
import Reels from './Reels'

const reelsapp={
    height:"100vh",
    backgroundColor:"black",
    display:"grid",
    placeItems:"center"
}

const appcontainer={
    position: "relative",
    height: "100vh",
    borderRadius:"20px",
    width:"80%",
    maxWidth:"500px",
    overflow: "scroll",
    scrollSnapType: "y mandatory"
}

export default function ReelApp() {
  return (
    <div style={reelsapp}>
        ReelApp
        <div style={appcontainer}>
            <Reels/>
            <Reels/>
            <Reels/>
        </div>
        </div>
  )
}
