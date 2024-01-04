import React, { useState } from 'react';
import "../styles/components.css"

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

// Main component
export default function SharePopup () {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <h1>React Popup Example</h1>
      <button onClick={openPopup}>Open Popup</button>

      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};


