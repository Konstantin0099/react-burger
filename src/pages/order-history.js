import * as React from "react";
import styles from "./feed.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getListOrders, func } from "./order-feed";
import { WS_CONNECTION_START_HISTORY } from "../wsRedux/action-types";

export const OrderHistory = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: WS_CONNECTION_START_HISTORY });
  }, [dispatch]);
  const { orders, total } = useSelector((state) => state.ordersHistory);
  let listHistory = null;
  const urlList = "/profile/orders/";
  const statusVisible = true;
  total ? (listHistory = getListOrders(func, orders, statusVisible, urlList)) : (listHistory = null);
  return (
    <section className={styles.history__container + " mt-10"}>
      <div className={styles.history__orders}>{listHistory}</div>
    </section>
  );
};
