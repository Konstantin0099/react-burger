import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import { useSelector, useDispatch } from "../../services/types/types";
import styleConstructor from "./order-sum.module.css";
import { OPEN_POPUP_ORDER, TOGGLE_VISIBLE } from "../../services/actions/modal";

export const OrderSum: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { sum } = useSelector((state) => state.orderState);
  const token: string | null = localStorage.getItem("refreshToken");
  const setOrder: () => void = () => {
    let direction = {
      pathname: "/login",
      state: { revert: `/` },
    };
    if (!!token) {
      dispatch({ type: OPEN_POPUP_ORDER });
      dispatch({ type: TOGGLE_VISIBLE });
    } else {
      history.push(direction);
    }
  };
  return (
    <div className={styleConstructor.placeOrder}>
      <span className={styleConstructor.sumOrder + " mr-15"}>
        {sum ? <span className="text text_type_digits-medium">{sum}</span> : ""}
        <CurrencyIcon type="primary" />
      </span>
      <Button type="primary" size="large" onClick={setOrder}>
        Оформить заказ
      </Button>
    </div>
  );
};
