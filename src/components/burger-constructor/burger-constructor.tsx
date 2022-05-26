import React from "react";
import styleConstructor from "./burger-constructor.module.css";
import { Lists } from "../lists/lists";
import { OrderSum } from "../order-sum/order-sum";
import { useDispatch } from "react-redux";
import { ORDER_SUM } from "../../services/actions/burger-constructor";
import { useSelector } from "../../services/types/types";
import { IItem } from "../../services/actions"
const BurgerConstructor = () => {

  const dispatch = useDispatch();
  const dataOrder = useSelector((state) => state.dataOrder);
  React.useEffect(() => {
    let sum = dataOrder.reduce((sum: number, ingredients: IItem) => (sum += ingredients.price), 0);
    dispatch({ type: ORDER_SUM, sum });
  }, [dispatch, dataOrder]);

  return (
    <section
      className={
        styleConstructor.burgerConstructor +
        " pt-20 pl-4 pr-4 ml-5 mr-0 mt-0 mb-0"
      }
    >
      <Lists
        dataOrder={dataOrder}
      />
      <OrderSum />
    </section>
  );
};
export default BurgerConstructor;
