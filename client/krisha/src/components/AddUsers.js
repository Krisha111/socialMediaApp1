import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {addUser} from '../service/api'

const Container={
  width:"85%",
  margin:"5%",
  marginTop:"30px",
 
}

const defaultValue={
    username: "",
        photo:"",
        caption: "",
      
       
}

const buttonContainer = {
  marginTop: "20px",
  textAlign: "center",
  marginBottom:"40px"
}

const inputStyle={
  width:"100%",
  border: 'none',        // No borders by default
  borderBottom: '1px solid black',  // Only bottom border
  outline: 'none',
  marginBottom:"40px" 
}

export default function AddUsers() {
    const [user,setUser]=useState(defaultValue);
    const navigate=useNavigate()
    const onValueChange=(e)=>{
         setUser({...user,[e.target.name]:e.target.value})
    }
    const onUserDetails = async () => {
        try {
          console.log(addUser(user));
          navigate('/');
        } catch (error) {
          console.log('Error adding user:', error);
          // Handle the error and display a message if needed
        }
      };
  return (
    <div style={Container}>
        <h1 style={buttonContainer}>New Post</h1>
        <div style={{marginTop:"70px"}}>
    
    <h2>Username</h2>
    <input style={inputStyle} onChange={(e)=>{onValueChange(e)}} name="username" value={user.username}/>
</div>
<div>
    <h2>Choose a Photo</h2>
    <input style={inputStyle} onChange={(e)=>{onValueChange(e)}} name="photo" value={user.photo}/>
</div>
<div>
    <h2>Caption</h2>
    <input style={inputStyle} onChange={(e)=>{onValueChange(e)}} name="caption" value={user.caption}/>
</div>



<div style={buttonContainer}>
        <button style={{ 
          color:"black",marginTop: "20px",width:"200px" ,borderRadius:"30px",border:"2px solid black"}} onClick={() => { onUserDetails(user) }}>Add the Post</button>
      </div>
    </div>
  )
}