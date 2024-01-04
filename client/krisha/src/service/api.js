import axios from 'axios'

const URL ='http://localhost:2020';

export const addUser = async(data) => {
  try{
   return await axios.post(`${URL}/post`,data)
  }catch(error){
    if (error.response) {
      // The request was made, but the server responded with an error status code
      console.error('Response Error:', error.response.data);
      console.error('Status Code:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('Request Error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }
  }
}
export const getUsers=async()=>{
  try{
   return await axios.get(`${URL}`)
  }catch(error){
    console.log("Error while getting the data.",error)
  }
}
export const getUser=async(id)=>{
  try{
   return await axios.get(`${URL}/${id}`)
  }catch(error){
    console.log("Error while getting the data of single user.",error)
  }
}
export const editUser=async(user,id)=>{
  try{
   return await axios.patch(`${URL}/${id}`,user)
  }catch(error){
    console.log("Error while calling edituser api",error)
  }
}
export const deleteUserapi=async(id)=>{
  try{
    return await axios.delete(`${URL}/${id}`)
   }catch(error){
     console.log("Error while calling deleteuser api",error)
   }
} 