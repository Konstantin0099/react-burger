import React from "react";
import PropTypes from "prop-types";
import styleConstructor from "./burger-constructor.module.css";
import { Lists } from "../lists/lists.js";
import { OrderSum } from "../order-sum/order-sum.js";
import { IngredientsContext } from "../../services/appContext";

const BurgerConstructor = (props) => {
   const { state, setState} = React.useContext(IngredientsContext);
  //  const { orderSum, setOrderSum } = React.useState(null);
  //  calculate the order amount
  function reducer(orderSumState, data) {
    let sum = data.reduce((sum, ingredients) => sum + ingredients.price, 0);
    console.log("sum>>", sum);
    return sum;
  }
  const [orderSumState, orderSumStateDispatcher] = React.useReducer(reducer, null, undefined);
  React.useEffect(() => {
  orderSumStateDispatcher(props.dataOrder);
  },[]);

  // console.log(
  // "state>>>", state, 
  // " setState>>>>", setState, 
  // "openPopupOrder>>>>", openPopupOrder );

  return (
    <section
      className={
        styleConstructor.burgerConstructor +
        " pt-20 pl-4 pr-4 ml-5 mr-0 mt-0 mb-0"
      }
    >
      <Lists data={props.data} dataOrder={props.dataOrder} />
      <OrderSum openPopupOrder={props.openPopupOrder}>{orderSumState}</OrderSum>
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
