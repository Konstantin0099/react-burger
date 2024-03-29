import * as React from "react";
import styles from "./feed.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getListOrders, func } from "./order-feed";
import { useLocation  } from "react-router-dom";
import { VISIBLE_LIST } from "../services/actions/modal";
import { wsConnectionStartHistory } from "../services/wsRedux/action-types";

export const OrderHistory = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { socket, orders, total } = useSelector((state) => state.ordersHistory);
  React.useEffect(() => {
    dispatch(wsConnectionStartHistory());
    dispatch({type: VISIBLE_LIST});
    return () => {
      socket && socket.close();
    };
  }, [dispatch]);
  let listHistory = null;
  const urlList = "/profile/orders";
  const statusVisible = true;
  total ? (listHistory = getListOrders(func, orders, statusVisible, urlList, location)) : (listHistory = null);
  return (
    <section className={styles.history__container + " mt-10"}>
      <div className={styles.history__orders}>{listHistory}</div>
    </section>
  );
};
