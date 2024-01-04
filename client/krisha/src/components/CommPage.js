import React from 'react'


export default function CommPage() {
    const buttonContainer = {
        marginTop: "20px",

        marginBottom:"40px"
      }
     
  return (
    <div>
        <h1 style={{display:"flex",justifyContent:"center"}}>Comments</h1>
  <h4>Add a Comment</h4>
<input style={{width:"80%",border: 'none',        // No borders by default
  borderBottom: '1px solid black',  // Only bottom border
  outline: 'none'}} type='text'/>
<div style={buttonContainer}>
        <button style={{ 
          color:"black",marginTop: "20px",width:"200px" ,borderRadius:"30px",border:"2px solid black"}}>Add the Post</button>
      </div>
    </div>
  )
}
