import "../assets/Modal.css";
import ReactDOM from "react-dom";

export default function Modal({ children, handleClose, highLight }) {
  return ReactDOM.createPortal(
    <div className="modal__backdrop">
      <div className="modal">
        {children}
        <button onClick={handleClose} className={highLight ? "highLight" : ""}>
          close
        </button>
      </div>
    </div>,
    document.body
  );
}
