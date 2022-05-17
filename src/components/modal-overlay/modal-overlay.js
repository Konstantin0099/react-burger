// import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import { useHistory, useLocation } from "react-router-dom";
import modal from "./modal-overlay.module.css";
import { CLOSE_POPUP_ORDER } from "../../services/actions/modal";
import { useDispatch } from "react-redux";

const ModalOverlay = ({ toggleVisible, children }) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
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
      dispatch({ type: CLOSE_POPUP_ORDER })
      // onClose();
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={modal.overlay} onClick={closedModal}>
      {children}
    </div>,
    modalRoot
  );
};

// ModalOverlay.propTypes = {
//   children: PropTypes.object,
//   toggleVisible: PropTypes.func,
// };

export default ModalOverlay;
