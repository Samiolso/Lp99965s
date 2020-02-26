import React from "react";
import "./Modal.scss"

export const Modal = ({ children, show, setShow }) => {
  const content = show && (
    <div className="overlay" >
      <div className="modal">
        <button className="modal-close" onClick={() => setShow(false)}>X</button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
  return content
}
