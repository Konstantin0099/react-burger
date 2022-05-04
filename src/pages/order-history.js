import { useHistory } from "react-router-dom";
import * as React from "react";
import styles from "./feed.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getListOrders } from "./order-feed";
import { WS_CONNECTION_START_HISTORY } from "../wsRedux/action-types";
import { OPEN_POPUP_ORDER_INGREDIENTS, TOGGLE_VISIBLE } from "../services/actions/modal";

export const OrderHistory = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: WS_CONNECTION_START_HISTORY });
  }, [dispatch]);
  const { historyOrders, total } = useSelector((state) => state.ordersHistory);

  const func = (id) => {
    dispatch({ type: OPEN_POPUP_ORDER_INGREDIENTS, item: id });
    dispatch({ type: TOGGLE_VISIBLE });
    history.replace({ pathname: `/profile/orders/${id}` });
  };
  let listHistory = null;
  total ? (listHistory = getListOrders(func, historyOrders, true)) : (listHistory = null);
  return (
    <section className={styles.history__container + " mt-10"}>
      <div className={styles.history__orders}>{listHistory}</div>
    </section>
  );
};
