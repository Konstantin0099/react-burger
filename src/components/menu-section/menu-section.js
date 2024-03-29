import { Food } from "../food/food.js";
import PropTypes from "prop-types";
import style from "./menu-section.module.css";
import { useSelector } from "react-redux";

const MenuSection = ({ ingredient }) => {
  const { data, dataOrder } = useSelector((state) => state);
  const recountOrder = (item) => {
    let countOrder = 0;
    dataOrder.forEach((element) => element._id === item._id && countOrder++);
    return countOrder;
  };
  return (
    <ul className={style.menu + " pt-6 pb-10"}>
      {data.data.map((item) => {
        const countOrder = recountOrder(item);
        return item.type === ingredient && <Food item={item} key={item._id} count={countOrder} />;
      })}
    </ul>
  );
};
MenuSection.propTypes = {
  ingredient: PropTypes.string,
};

export { MenuSection };
