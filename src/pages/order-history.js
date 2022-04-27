
import { BrowserRouter as Router, Route, Switch, Redirect,  useHistory } from "react-router-dom";
import * as React from "react";
import styles from "./feed.module.css";
import { OrderFeedItem } from "./order-feed";


export const OrderHistory = () => {
    React.useEffect(() => {
    },[]);
    const history = useHistory();
    
    return (
      <section className={styles.history__container + " mt-10"}>
          <div className={styles.history__orders}>
            <OrderFeedItem statusVisible={true}/>
            <OrderFeedItem statusVisible={true}/>
            <OrderFeedItem statusVisible={true}/>
            <OrderFeedItem statusVisible={true}/>
            <OrderFeedItem statusVisible={true}/>
            <OrderFeedItem statusVisible={true}/>
          </div>
      </section>
    );
  
    // end OrderFeed
  };
