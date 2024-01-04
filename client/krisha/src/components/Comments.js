import React, { useState } from 'react';
import "../styles/components.css"

// Popup component
const Popup = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <h2>Write a Caption....</h2>
          <input type='text' className='bottom-border-input'/>
          <p>This is the content of the popup.</p>
        </div>
      </div>
    )
  );
};

// Main component
export default function Comments () {
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


