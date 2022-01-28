import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./food.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export const Food = ({ item, dataOrder, openPopup }) => {
  const orderItem = dataOrder.find((el) => {
    return el._id === item._id;
  });
  return (
    <li className={style.itemMenu} onClick={() => openPopup(item)}>
      {orderItem !== undefined && orderItem.count && (
        <Counter count={orderItem.count} size="default" />
      )}
      <img className={style.img} src={item.image} alt="упсс" />
      <div className={style.price + " pt-2 pb-2"}>
        <span className="text text_type_digits-default mr-2">{item.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default">{item.name}</h3>
    </li>
  );
};

Food.propTypes = {
  dataOrder: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      calories: PropTypes.number,
      type: PropTypes.string,
      price: PropTypes.number,
      carbohydrates: PropTypes.number,
      count: PropTypes.number,
      fat: PropTypes.number,
      proteins: PropTypes.number,
    })
  ),
  item: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    calories: PropTypes.number,
    type: PropTypes.string,
    price: PropTypes.number,
    carbohydrates: PropTypes.number,
    count: PropTypes.number,
    fat: PropTypes.number,
    proteins: PropTypes.number,
  }),
  openPopup: PropTypes.func,
};
