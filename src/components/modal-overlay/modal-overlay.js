// import { Food } from "../food/food.js";
import React from "react";
import ReactDOM from "react-dom";
import modal from "./modal-overlay.module.css";

const ModalOverlay = (props) => {
  const modalRoot = document.getElementById("react-modals");

  const closedModal = (e) => {
    e.target === e.currentTarget && props.toggle();
    e.key === "Escape" && props.toggle();
  };
  React.useEffect(() => {
    document.addEventListener("keydown", closedModal);
    return () => {document.removeEventListener("keydown", closedModal);}
  }
  );

  return ReactDOM.createPortal(
    <div className={modal.overlay} onClick={closedModal}>
      {props.children}
    </div>,
    modalRoot
  );
};

export default ModalOverlay;
