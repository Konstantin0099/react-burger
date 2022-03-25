import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import modal from "./modal-overlay.module.css";

const ModalOverlay = ({ onClose, toggleVisible, children }) => {
  const modalRoot = document.getElementById("react-modals");
  const closedModal = (e) => {
    e.target === e.currentTarget && toggleVisible();
  };
  const closedModalEscape = (e) => {
    e.key === "Escape" && toggleVisible();
  };

  React.useEffect(() => {
    document.addEventListener("keydown", closedModalEscape);
    return () => {
      document.removeEventListener("keydown", closedModalEscape);
      onClose();
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={modal.overlay} onClick={closedModal}>
      {children}
    </div>,
    modalRoot
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.object,
  toggleVisible: PropTypes.func,
  onClose: PropTypes.func,
};

export default ModalOverlay;
