import PropTypes from "prop-types";
import style from "./order-details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";


const OrderDetails = ({id}) => {
  // const dispatch = useDispatch();
  const { number} = useSelector((state) => state.orderState);
// console.log("OrderDetails", number);
  return (
    <div className={style.order}>
      <p className="text text_type_digits-large pt-30">{number}</p>
      <p className="text text_type_digits-default pt-8 pb-15">
        идентификатор заказа
      </p>
      <CheckMarkIcon type="primary" />
      <p className="text text_type_digits-small pt-15">
        Ваш заказ начали готовить
      </p>
      <p className={style.content + " text text_type_digits-small pt-2 pb-30"}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

OrderDetails.propTypes = {
  id: PropTypes.number
};

export default OrderDetails;
