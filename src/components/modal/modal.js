// import { Food } from "../food/food.js";
import React from "react";
import modal from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay.js";
import OrderDetails from "../order-details/order-details.js";
const Modal = (props) => {

  return (

<ModalOverlay toggle={props.toggle}>
    <div className={modal.modal}>
      <div className={modal.closeIcon + " mt-15 mr-10"} onClick={props.toggle}>
        <CloseIcon type="primary" />
      </div>
      {props.children}
      {/* <OrderDetails id="337733" /> */}
    </div>
</ModalOverlay>


  );

};

export default Modal;
