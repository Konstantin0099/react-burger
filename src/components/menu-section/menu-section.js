import { Food } from "../food/food.js";
import PropTypes from "prop-types";
import style from "./menu-section.module.css";
import { useSelector } from "react-redux";

const MenuSection = ({ ingredient }) => {
  const state = useSelector((state) => state);
  const { data, dataOrder } = state;

  const recountOrder = (item) => {
    let countOrder = 0;
    dataOrder.forEach((element) => element._id === item._id && countOrder++);
    return countOrder;
  };

  return (
    <ul className={style.menu + " pt-6 pb-10"}>
      {data.data.map((item) => {
        const countOrder = recountOrder(item);
        return (
          item.type === ingredient && (
            <Food item={item} key={item._id} count={countOrder} />
          )
        );
      })}
    </ul>
  );
};
MenuSection.propTypes = {
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
  data: PropTypes.arrayOf(
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
  ingredient: PropTypes.string,
};

export { MenuSection };
