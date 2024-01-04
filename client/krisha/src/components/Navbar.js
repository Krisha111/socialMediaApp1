import React from 'react';
// import { Link } from 'react-router-dom';

const headerStyle = {
  backgroundColor: '#FFB347',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  width: "100%", /* Set the width of your navbar */
  // backgroundColor: "#333",
  color: "#fff",
  // padding: "15px",
  height:"70px",
  
};

const navBarStyle = {
  color: 'white',
  display: 'flex',  // Added display: 'flex'
  alignItems: 'center', // Added alignItems: 'center'
};

// const linkStyle = {
//   marginBottom:'0px',
//   marginLeft: '25px',  // Add marginLeft to create space between items
//   color: 'white',
//   textDecoration: 'none',
// };

export default function Navbar() {
  return (
    <div style={headerStyle}>
      <div style={navBarStyle}>
        <img 
        alt='facebook clone logo'
        style={{ marginLeft: 10,
        height:70,
        width:125
        }}
        src='https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png'/>
        
        {/* <Link to="/all" style={linkStyle}>
          <p style={{marginLeft:"55px"}}>All Posts</p>
        </Link>
        <Link to="/add" style={linkStyle}>
          Add Post
        </Link> */}
      </div>
    </div>
  );
}
