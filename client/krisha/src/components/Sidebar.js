import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { IoMdPhotos } from "react-icons/io";
import { BsCameraReels } from "react-icons/bs";

const sidebarStyle = {
  position: 'sticky',
  overflow: 'hidden',
  width: '150px',
  height: '100vh',
  backgroundColor: '#b5651d',
  
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
 /* Set the width of your sidebar */
  

};

const linkContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const linkStyle = {
  marginLeft: '10px',
  color: 'white',
  textDecoration: 'none',
};

export default function Sidebar() {
  return (
    <div style={sidebarStyle}>
      <div style={linkContainerStyle}>
        <IoMdPhotos color='white' fontSize={25}/>
        <Link to="/" style={linkStyle}>
          All Posts
        </Link>
      </div>
      <div style={linkContainerStyle}>
        
      <MdAddPhotoAlternate color='white' fontSize={25}/>
        <Link to="/add" style={linkStyle}>
          Add Post
        </Link>
       
      </div>
      <div style={linkContainerStyle}>
        
      <BsCameraReels color='white' fontSize={23}/>
        <Link to="/reelsapp" style={linkStyle}>
          Reels
        </Link>

       
      </div>

    </div>
  );
}
