import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ onCloseModal, error }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        <h1>Invalid Input</h1>
        <p>{error}</p>
        <button onClick={() => onCloseModal()}>Okay</button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
