import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;