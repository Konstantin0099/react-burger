import React from "react";
import PropTypes from "prop-types";
import styleConstructor from "./burger-constructor.module.css";
import { Lists } from "../lists/lists.js";
import { OrderSum } from "../order-sum/order-sum.js";
import { IngredientsContext } from "../../services/appContext";
import { useDispatch, useSelector } from 'react-redux';
import { ORDER_SUM_STATE } from '../../services/actions/burger-constructor';


const BurgerConstructor = (props) => {

  const dispatch = useDispatch();
  const dataOrder = useSelector(state => state.dataOrder);
  const orderSumState = useSelector(state => state.orderSumState);
  React.useEffect(() => {
    dispatch({ type: ORDER_SUM_STATE, dataOrder})
  }, [dataOrder]);

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
