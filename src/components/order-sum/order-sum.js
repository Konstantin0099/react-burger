import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleConstructor from "./order-sum.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay.js";
import Modal from "../modal/modal.js";
import OrderDetails from "../order-details/order-details.js";

export const OrderSum = () => {
  const [visible, setShown] = React.useState(false);
  function toggle() {
    setShown(!visible);
  };
  return (
    <div className={styleConstructor.placeOrder}>
      <span className={styleConstructor.sumOrder + " mr-15"}>
        <span className="text text_type_digits-medium">{1313}</span>
        <CurrencyIcon type="primary" x="10" />
      </span>
      <Button type="primary" size="large" onClick={toggle}>
        Оформить заказ
      </Button>
      {visible && (
        <Modal toggle={toggle}>
          <OrderDetails id="337733" />
        </Modal>
      )}
    </div>
  );
};
