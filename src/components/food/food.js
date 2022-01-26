import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./food.module.css";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import Modal from "../modal/modal.js";
import IngredientDetails from "../ingredient-details/ingredient-details.js";

export const Food = ({ item, dataOrder }) => {
  let count = dataOrder.find((el) => el._id === item._id);
  const [visible, setShown] = React.useState(false);
  function toggle() {
    setShown(!visible);

  };

  return (
    <li className={style.itemMenu} onClick={toggle}>
      {visible && (
        <Modal toggle={toggle}>
          <IngredientDetails item={item} />
        </Modal>
      )}
      {count !== undefined && count.count && (
        <Counter count={count.count} size="default" />
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
};
