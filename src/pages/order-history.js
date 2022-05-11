import * as React from "react";
import styles from "./feed.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getListOrders, func } from "./order-feed";
import { useLocation  } from "react-router-dom";
// import { WS_CONNECTION_START_HISTORY } from "../wsRedux/action-types";
import { DISABLED_LIST, VISIBLE_LIST } from "../services/actions/modal";
import { wsConnectionStartHistory } from "../wsRedux/action-types";
// import { wsActionsHistory } from "../index";
// import { wsUrl } from "../utils/data";

export const OrderHistory = () => {
  console.log("OrderHistory");
  const location = useLocation();
  const dispatch = useDispatch();
  const { socket, orders, total } = useSelector((state) => state.ordersHistory);
  React.useEffect(() => {
    // dispatch({ type: WS_CONNECTION_START_HISTORY });
    dispatch(wsConnectionStartHistory());
    dispatch({type: VISIBLE_LIST});
    return () => {
      // dispatch({type: DISABLED_LIST});
      socket && socket.close();
    };
  }, [dispatch]);
  // const { orders, total } = useSelector((state) => state.ordersHistory);
  let listHistory = null;
  const urlList = "/profile/orders";
  const statusVisible = true;
  total ? (listHistory = getListOrders(func, orders, statusVisible, urlList, location)) : (listHistory = null);
  console.log("OrderHistory location=", location.pathname, total);
  return (
    <section className={styles.history__container + " mt-10"}>
      <div className={styles.history__orders}>{listHistory}</div>
    </section>
  );
};
