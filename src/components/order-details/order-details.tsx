import React from "react";
import style from "./order-details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NUMBER_REMOVE } from "../../services/actions/burger-constructor";
import { getNumber } from "../../services/thunk/get-number-order";
import { useSelector, useDispatch  } from "../../services/types/types";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { dataOrder } = useSelector((state) => state);
  const { number } = useSelector((state) => state.orderState);
  React.useEffect(() => {
    dispatch(getNumber(dataOrder));
    return () => {
      dispatch({ type: NUMBER_REMOVE });
    };
  }, []);
  return number ? (
    <div className={style.order}>
      <p className={style.id + " text text_type_digits-large pt-30"}>{number}</p>
      <p className={style.title + " text text_type_digits-default pt-8 pb-15"}>идентификатор заказа</p>
      <CheckMarkIcon type="primary" />
      <p className={style.message + " text text_type_digits-small pt-15"}>Ваш заказ начали готовить</p>
      <p className={style.content + " text text_type_digits-small pt-2 pb-30"}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  ) : (
    <div className={style.order}>
      <p className={style.load + " text text_type_digits-medium pt-30 pb-30"}>"Ожидайте регистрации заказа"</p>
    </div>
  );
};

export default OrderDetails;
