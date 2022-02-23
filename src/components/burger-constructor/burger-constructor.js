import React from "react";
import PropTypes from "prop-types";
import styleConstructor from "./burger-constructor.module.css";
import { Lists } from "../lists/lists.js";
import { OrderSum } from "../order-sum/order-sum.js";
import { IngredientsContext } from "../../services/appContext";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_SUM } from "../../services/actions/burger-constructor";
import { getNumber } from "../../services/thunk/get-number-order";

const BurgerConstructor = (props) => {
  const dispatch = useDispatch();
  const dataOrder = useSelector((state) => state.dataOrder);
  // const {sum} = useSelector(state => state.orderState);
  React.useEffect(() => {
    dispatch(getNumber(dataOrder));
    dispatch({ type: ORDER_SUM, dataOrder });
  }, [dataOrder]);

  return (
    <section
      className={
        styleConstructor.burgerConstructor +
        " pt-20 pl-4 pr-4 ml-5 mr-0 mt-0 mb-0"
      }
    >
      <Lists dataOrder={dataOrder} />
      <OrderSum />
    </section>
  );
};

BurgerConstructor.propTypes = {
  openPopupOrder: PropTypes.func,
};

export default BurgerConstructor;
