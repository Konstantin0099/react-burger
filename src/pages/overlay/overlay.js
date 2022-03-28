import PropTypes from "prop-types";
// import React from "react";
// import ReactDOM from "react-dom";
import overlay from "./overlay.module.css";

export const Overlay = ({ children }) => {
    console.log(overlay);
  return (
    <div className={overlay.overlay}>
      {children}
    </div>
  )
};

Overlay.propTypes = {
  children: PropTypes.object,
};

