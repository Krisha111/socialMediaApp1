import React, { useState,useEffect } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import { editUser,getUser } from '../service/api'

const Container={
  width:"50%",
  margin:"5%",
 marginTop:"30px"
}
const defaultValue={
    username: "",
    photo:"",
    caption: "",
  
}

export default function EditUser() {
    const [user,setUser]=useState(defaultValue);
    const navigate=useNavigate()
    const {id}=useParams();
  

const loadUserDetails =async(id)=>{
    const response=await getUser(id)
    setUser(response.data)
}
const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
}
const editUserDetails=async()=>{
        await editUser(user,id);
        navigate('/')
    }
    useEffect(()=>{
        loadUserDetails(id)
        },[id])
  return (
    <div style={Container}>
        <h4>Edit User</h4>
        <div>
    
            <h4>Username</h4>
            <input onChange={(e)=>{onValueChange(e)}} name="username" value={user.username}/>
        </div>
        <div>
            <h4>Photo</h4>
            <input onChange={(e)=>{onValueChange(e)}} name="photo" value={user.photo}/>
        </div>
        <div>
            <h4>Caption</h4>
            <input onChange={(e)=>{onValueChange(e)}} name="caption" value={user.caption}/>
        </div>
       
  
      
        <div>
        <button variant="contained" onClick={()=>{editUserDetails()}}>Edit User</button>
        </div>
    </div>
  )
}