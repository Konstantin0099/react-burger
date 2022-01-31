import { Food } from "../food/food.js";
import PropTypes from "prop-types";
import style from "./menu-section.module.css";

const MenuSection = ({ openPopup, data, ingredient, dataOrder }) => {
  return (
    <ul className={style.menu + " pt-6 pb-10"}>
      {data.map(
        (item, index) =>
          item.type === ingredient && (
            <Food
              item={item}
              key={item._id}
              dataOrder={dataOrder}
              openPopup={openPopup}
            />
          )
      )}
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
  openPopup: PropTypes.func,
};

export default MenuSection;
