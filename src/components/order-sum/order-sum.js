
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import styleConstructor from "./order-sum.module.css";
import { OPEN_POPUP_ORDER, TOGGLE_VISIBLE } from "../../services/actions/modal";

export const OrderSum = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const { sum } = useSelector((state) => state.orderState);
  const token = localStorage.getItem("refreshToken")
  const setOrder = () => {
    let direction = {
      pathname: "/login",
    state: { revert: `/` },
  };
  if (!!token) {
    dispatch({ type: OPEN_POPUP_ORDER });
  dispatch({ type: TOGGLE_VISIBLE })
} else {
  history.push(direction)
  // history.replace(direction)
}
}
  return (
    <div className={styleConstructor.placeOrder}>
      <span className={styleConstructor.sumOrder + " mr-15"}>
        {sum ? <span className="text text_type_digits-medium">{sum}</span> : ""}
        <CurrencyIcon type="primary" x="10" />
      </span>
      <Button
        type="primary"
        size="large"
        onClick={setOrder}
      >
        Оформить заказ
      </Button>
    </div>
  );
};

