import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import modal from "./modal-overlay.module.css";

const ModalOverlay = (props) => {
  const modalRoot = document.getElementById("react-modals");
  const closedModal = (e) => {
    e.target === e.currentTarget && props.toggleVisible();
  };
  const closedModalEscape = (e) => {
    e.key === "Escape" && props.toggleVisible();
  };

  React.useEffect(() => {
    document.addEventListener("keydown", closedModalEscape);
    return () => {
      document.removeEventListener("keydown", closedModalEscape);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={modal.overlay} onClick={closedModal}>
      {props.children}
    </div>,
    modalRoot
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.object,
  toggleVisible: PropTypes.func,
};

export default ModalOverlay;
