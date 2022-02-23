
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleConstructor from "./order-sum.module.css";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_POPUP_ORDER, TOGGLE_VISIBLE } from "../../services/actions/modal";

export const OrderSum = () => {
  const dispatch = useDispatch();
  const { sum } = useSelector((state) => state.orderState);

  return (
    <div className={styleConstructor.placeOrder}>
      <span className={styleConstructor.sumOrder + " mr-15"}>
        <span className="text text_type_digits-medium">{sum}</span>
        <CurrencyIcon type="primary" x="10" />
      </span>
      <Button
        type="primary"
        size="large"
        onClick={() => {
          dispatch({ type: OPEN_POPUP_ORDER });
          dispatch({ type: TOGGLE_VISIBLE });
        }}
      >
        Оформить заказ
      </Button>
    </div>
  );
};

