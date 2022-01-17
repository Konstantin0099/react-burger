import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleConstructor from "./place-order.module.css";

export const PlaceOrder = () => {
  return (
    <div className={styleConstructor.placeOrder}>
      <span className={styleConstructor.sumOrder + " mr-15"}>
        <span className="text text_type_digits-medium">{1313}</span>
        <CurrencyIcon type="primary" x="10"/>
      </span>
      <Button type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
};