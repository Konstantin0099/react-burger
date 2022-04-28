
import { BrowserRouter as Router, Route, Switch, Redirect,  useHistory } from "react-router-dom";
import * as React from "react";
import styles from "./feed.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getListOrders } from "./order-feed";
import {
  WS_CONNECTION_START_HISTORY,
} from "../wsRedux/action-types";

export const OrderHistory = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { historyOrders } = useSelector((state) => state.ordersHistory);
    React.useEffect(() => {
      dispatch({ type: WS_CONNECTION_START_HISTORY });
    },[]);
    // console.log("OrderHistory>>>>____", historyOrders);
    const listHistory = getListOrders(historyOrders, true);

    return (
      <section className={styles.history__container + " mt-10"}>
          <div className={styles.history__orders}>
          {listHistory}
          </div>
      </section>
    );
  
    // end OrderFeed
  };
