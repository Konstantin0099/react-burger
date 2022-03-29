import PropTypes from "prop-types";
// import React from "react";
// import ReactDOM from "react-dom";
import overlay from "./overlay.module.css";

const Overlay = ({children}) => {
  return (
    <div className={overlay.overlay}>
      {children}
    </div>
  )
};

Overlay.propTypes = {
  children: PropTypes.object,
}

export { Overlay }