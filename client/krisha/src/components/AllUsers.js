import React, { useEffect, useState } from 'react';
import { getUsers, deleteUserapi } from '../service/api';
import { FaUserEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { IoHeartOutline, IoHeart } from "react-icons/io5"; // Import IoHeart for the filled heart icon

import { CiLocationArrow1 } from 'react-icons/ci';
import { MdOutlineComment } from 'react-icons/md';
import { Link } from 'react-router-dom';

const StyledTablee = {
  width: '70%',
  margin: '50px auto',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const Thead = {
  background: 'pink',
  color: 'black',
  fontSize: '25px',
};

const mainbody = {
  width: '100%',
  color: 'black',
};



  // ------------------------------------------------------sharepop

  // Popup component
const Popup = ({ isOpen, onClose }) => {
  const shareOnFacebook = () => {
      // Open a new window or tab with a pre-filled share dialog for Facebook
      window.open('https://www.facebook.com/sharer/sharer.php?u=your_share_url', '_blank');
    };
  
    const shareOnTwitter = () => {
      // Open a new window or tab with a pre-filled tweet for Twitter
      window.open('https://twitter.com/intent/tweet?url=your_share_url&text=your_share_text', '_blank');
    };
    const shareOnWhatsApp = () => {
      window.open('whatsapp://send?text=your_share_text', '_blank');
    };
    
    const shareViaEmail = () => {
      window.location.href = 'mailto:?subject=your_subject&body=your_share_text';
    };
    
    const shareOnInstagram = () => {
      window.open('https://www.instagram.com/share?url=your_share_url', '_blank');
    };
  
    // Add similar functions for other social media platforms
return (
  isOpen && (
    <div className="popup-overlay">
      <div className="popup-content">
      
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Share via....</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: "10px" ,
flexDirection: "row",

          }}>
        <div style={{ cursor: 'pointer' }} onClick={shareOnFacebook}>
        <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook Icon" />

        </div>
    <div style={{ cursor: 'pointer' }} onClick={shareOnTwitter}>
    <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter Icon" />

    </div>
    <div onClick={shareOnWhatsApp} style={{ cursor: 'pointer' }}>
<img
  src="https://img.icons8.com/color/48/000000/whatsapp--v5.png"
  alt="WhatsApp Icon"

/>
</div>
<div onClick={shareViaEmail} style={{ cursor: 'pointer'}}>
<img
  src="https://img.icons8.com/color/48/000000/email.png"
  alt="Email Icon"
  
/>
</div>
<div onClick={shareOnInstagram} style={{ cursor: 'pointer' }}>
<img
  src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
  alt="Instagram Icon"
  
/>
</div>

    {/* Add buttons/icons for other social media platforms */}
    </div>    
      </div>
    </div>
  )
);
};

  //----------------------------------------------------------sharepop
  export default function AllUsers() {
    const [users, setUsers] = useState([]);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };
  
    // Use an array of objects to store the state for each user
    const [heartStates, setHeartStates] = useState([]);

  const handleHeartClick = (userId) => {
    setHeartStates((prevStates) =>
      prevStates.map((state) =>
        state.userId === userId ? { ...state, isClicked: !state.isClicked } : state
      )
    );
  };

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);

    // Initialize the heart states when users are fetched
    const initialHeartStates = response.data.map((user) => ({ userId: user._id, isClicked: false }));
    setHeartStates(initialHeartStates);
  };

  const deleteUser = async (id) => {
    await deleteUserapi(id);
    getAllUsers();
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div style={StyledTablee}>
      <div>
        <div style={Thead}>
          <h5>UserName</h5>
          <h5>Photo</h5>
          <h5>Caption</h5>
          <h5>Likes,likeCount, comment and share</h5>
        </div>
      </div>
      <div style={mainbody}>
        {users.map((user, index) => (
          <div style={{ border: "1px solid black", padding: '30px', marginBottom: "20px" }} key={user._id}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link to={`/edit/${user._id}`}>
                <FaUserEdit style={{ marginRight: '25px' }} fontSize={25} />
              </Link>
              <RiDeleteBin6Fill onClick={() => deleteUser(user._id)} style={{ marginRight: '25px' }} fontSize={25} />
            </div>
            <div style={{display:"flex",flexDirection:"row", alignItems: "center"}}>
            <img 
            style={{borderRadius:"30px",width:"50px",height:"50px",marginRight: "15px"}}
            src={user.photo}/>
            <h5>{user.username}</h5>
            </div>
            <img
              src={user.photo}
              alt="photoo"
              style={{ maxHeight: '400px', height: '80%', width: '100%', borderRadius: '20px' }}
            />
            <h5>{user.caption}</h5>
        
              {heartStates[index]?.isClicked ? (
                <IoHeart onClick={() => handleHeartClick(user._id)} style={{ marginRight: '20px', color: 'red' }} fontSize={25} />
              ) : (
                <IoHeartOutline onClick={() => handleHeartClick(user._id)} style={{ marginRight: '20px' }} fontSize={25} />
              )}
            
           
       
            
            <CiLocationArrow1 onClick={openPopup} style={{ marginRight: '20px' }} fontSize={25} />
            
          
<Popup isOpen={isPopupOpen} onClose={closePopup} />
<Link to={"/compage"}>
            <MdOutlineComment style={{ marginRight: '20px' }} fontSize={25} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
