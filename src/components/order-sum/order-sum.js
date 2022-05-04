
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory, useLocation } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import styleConstructor from "./order-sum.module.css";
import { OPEN_POPUP_ORDER, TOGGLE_VISIBLE } from "../../services/actions/modal";

export const OrderSum = () => {
  console.log("OrderSum1");
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
  history.replace(direction)
}
}

console.log("OrderSum2");
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

