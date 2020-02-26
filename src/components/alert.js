import React from "react";
import "./alert.scss"

export const Alert = ({ children, display, setDisplay }) => {
  const content = display && (
    <div className="overlay-alert">
      <div className="alert">
        <button className="alert-close" onClick={() => setDisplay(false)}>X</button>
        <div className="alert-body">{children}</div>
      </div>
    </div>
  )
  return content
}