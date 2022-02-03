import PropTypes from "prop-types";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleConstructor from "./order-sum.module.css";

export const OrderSum = (props) => {
  return (
    <div className={styleConstructor.placeOrder}>
      <span className={styleConstructor.sumOrder + " mr-15"}>
        <span className="text text_type_digits-medium">{props.children}</span>
        <CurrencyIcon type="primary" x="10" />
      </span>
      <Button type="primary" size="large" onClick={props.openPopupOrder}>
        Оформить заказ
      </Button>
    </div>
  );
};

OrderSum.propTypes = {
  children: PropTypes.number,
  openPopupOrder: PropTypes.func,
};
