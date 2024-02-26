import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={closeModal}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'), // Корневой элемент для портала
  );
};

export default Modal;
