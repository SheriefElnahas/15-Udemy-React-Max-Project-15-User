import React from 'react';
import './Modal.css';

function Modal({ onCloseModal, error }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h1>Invalid Input</h1>
        <p>{error}</p>
        <button onClick={() => onCloseModal()}>Okay</button>
      </div>
    </div>
  );
}

export default Modal;
