import React from "react";
import PropTypes from "prop-types";
import styleConstructor from "./burger-constructor.module.css";
import { Lists } from "../lists/lists.js";
import { OrderSum } from "../order-sum/order-sum.js";
import { IngredientsContext } from "../../services/appContext";

const BurgerConstructor = (props) => {
  const { state } = React.useContext(IngredientsContext);
  const { data, dataOrder } = state;
  function reducer(_, data) {
    let sum = data.reduce(
      (sum, ingredients) =>
        sum +
        (ingredients.type === "bun"
          ? ingredients.price * 2
          : ingredients.price),
      0
    );
    return sum;
  }
  const [orderSumState, orderSumStateDispatcher] = React.useReducer(
    reducer,
    null,
    undefined
  );
  React.useEffect(() => {
    orderSumStateDispatcher(dataOrder);
  }, []);

  return (
    <section
      className={
        styleConstructor.burgerConstructor +
        " pt-20 pl-4 pr-4 ml-5 mr-0 mt-0 mb-0"
      }
    >
      <Lists dataOrder={dataOrder} />
      <OrderSum openPopupOrder={props.openPopupOrder}>{orderSumState}</OrderSum>
    </section>
  );
};

BurgerConstructor.propTypes = {
  openPopupOrder: PropTypes.func,
};

export default BurgerConstructor;
