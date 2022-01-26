import PropTypes from "prop-types";
import style from "./order-details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const OrderDetails = (props) => {
  return (
    <div className={style.order}>
      <p className="text text_type_digits-large pt-30">{props.id}</p>
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
  id: PropTypes.string,
};

export default OrderDetails;
