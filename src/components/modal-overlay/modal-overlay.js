import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import modal from "./modal-overlay.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  TOGGLE_VISIBLE,
  OPEN_POPUP_INGREDIENTS,
  OPEN_POPUP_ORDER,
} from "../../services/actions/modal";


const ModalOverlay = (props) => {
  // console.log("ModalOverlay = (props) =>", props);
  const dispatch = useDispatch();
  const { data, dataOrder, openPopup } = useSelector((state) => state);

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
