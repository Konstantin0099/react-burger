import PropTypes from "prop-types";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleConstructor from "./order-sum.module.css";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_POPUP_ORDER, TOGGLE_VISIBLE } from "../../services/actions/modal";
import { getNumber } from "../../services/thunk/get-number-order";


export const OrderSum = (props) => {
  const dispatch = useDispatch();
  const  dataOrder = useSelector(state => state.dataOrder);
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
          dispatch(getNumber(dataOrder));
          dispatch({ type: OPEN_POPUP_ORDER });
          dispatch({ type: TOGGLE_VISIBLE });
        }}
      >
        Оформить заказ
      </Button>
    </div>
  );
};

OrderSum.propTypes = {
  children: PropTypes.number,
  openPopupOrder: PropTypes.func,
};
