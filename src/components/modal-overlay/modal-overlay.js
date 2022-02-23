import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import modal from "./modal-overlay.module.css";
import { useDispatch} from "react-redux";
import {
  TOGGLE_VISIBLE,
  CLOSE_POPUP_ORDER,
} from "../../services/actions/modal";


const ModalOverlay = (props) => {
  const dispatch = useDispatch();
  const modalRoot = document.getElementById("react-modals");
  const closedModal = (e) => {
    e.target === e.currentTarget && dispatch({ type: TOGGLE_VISIBLE});;
  };
  const closedModalEscape = (e) => {
    e.key === "Escape" && dispatch({ type: TOGGLE_VISIBLE});;
  };


  React.useEffect(() => {
    document.addEventListener("keydown", closedModalEscape);
    return () => {
      document.removeEventListener("keydown", closedModalEscape);
      dispatch({ type: CLOSE_POPUP_ORDER})
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
};

export default ModalOverlay;
