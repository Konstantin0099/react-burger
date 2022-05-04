
import { BrowserRouter as Router, Route, Switch, Redirect,  useHistory, useLocation, useRouteMatch, useParams } from "react-router-dom";
import * as React from "react";
import styles from "./feed.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getListOrders } from "./order-feed";
import {
  WS_CONNECTION_START_HISTORY,
} from "../wsRedux/action-types";
import { OPEN_POPUP_ORDER_INGREDIENTS, TOGGLE_VISIBLE  } from "../services/actions/modal";

export const OrderHistory = () => {
  debugger;
   const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const params = useParams();
    const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch({ type: WS_CONNECTION_START_HISTORY });
    },[]);
    const { historyOrders, total } = useSelector((state) => state.ordersHistory);
    // console.log("OrderHistory>>>>____", historyOrders);
    const func = (id) => {
      dispatch({ type: OPEN_POPUP_ORDER_INGREDIENTS, item: id});
      dispatch({ type: TOGGLE_VISIBLE });
      history.replace({ pathname: `/profile/orders/${id}`});
    };
    let listHistory = null;
    total ? listHistory = getListOrders(func, historyOrders, true) : listHistory = null;
    console.log("OrderHistory___params>", params);
    console.log("OrderHistory___match>", match);
    console.log("OrderHistory___history>", history);
    return (
      <section className={styles.history__container + " mt-10"}>
          <div className={styles.history__orders}>
          {listHistory}
          </div>
      </section>
    );
  
    // end OrderFeed
  };
