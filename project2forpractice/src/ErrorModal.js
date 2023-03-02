import React from "react";
import './ErrorModal.css';

function ErrorModal(props) {
    function onConfirm() {
        props.onConfirm()
    }
  return (
    <div>
      <div className="error-backdrop" onClick={onConfirm}>
        <div className="modaL">
          <div className="fs-2 title">{props.title}</div>
          <div className="fs-4 message">{props.message}</div>
          <button className="btn-warning" onClick={onConfirm}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
