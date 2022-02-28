import React from "react";
import styleConstructor from "./burger-constructor.module.css";
import { Lists } from "../lists/lists.js";
import { OrderSum } from "../order-sum/order-sum.js";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_SUM } from "../../services/actions/burger-constructor";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const dataOrder = useSelector((state) => state.dataOrder);
  React.useEffect(() => {
    dispatch({ type: ORDER_SUM, dataOrder });
  }, []);
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
export default BurgerConstructor;
