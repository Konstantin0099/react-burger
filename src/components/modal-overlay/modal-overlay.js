import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect,  useHistory, useRouteMatch, useLocation } from "react-router-dom";
import modal from "./modal-overlay.module.css";

const ModalOverlay = ({ toggleVisible, onClose, children }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  // console.log("ModalOverlay history= loc=", history, location)
  const modalRoot = document.getElementById("react-modals");
  const closedModal = (e) => {
    e.target === e.currentTarget && toggleVisible(history, location);
  };
  const closedModalEscape = (e) => {
    e.key === "Escape" && toggleVisible(history, location);
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
