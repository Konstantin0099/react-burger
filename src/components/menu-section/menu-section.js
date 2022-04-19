import { Food } from "../food/food.js";
import PropTypes from "prop-types";
import style from "./menu-section.module.css";
import { useSelector } from "react-redux";
import { ingredientType } from "../../utils/types";

const MenuSection = ({ ingredient }) => {
  const { data, dataOrder } = useSelector((state) => state);
  // const { data, dataOrder } = state;

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
  dataOrder: PropTypes.arrayOf(ingredientType.isRequired),
  data: PropTypes.arrayOf(ingredientType.isRequired),
  ingredient: PropTypes.string,
};

export { MenuSection };
