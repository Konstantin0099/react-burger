import PropTypes from "prop-types";
import styleConstructor from "./burger-constructor.module.css";
import { Lists } from "../lists/lists.js";
import { OrderSum } from "../order-sum/order-sum.js";

const BurgerConstructor = (props) => {
  return (
    <section
      className={
        styleConstructor.burgerConstructor +
        " pt-20 pl-4 pr-4 ml-5 mr-0 mt-0 mb-0"
      }
    >
      <Lists data={props.data} dataOrder={props.dataOrder} />
      <OrderSum openPopupOrder={props.openPopupOrder} />
    </section>
  );
};

BurgerConstructor.propTypes = {
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
  openPopupOrder: PropTypes.func,
};

export default BurgerConstructor;
