import { BrowserRouter as Router, Route, Switch, Redirect,  useHistory } from "react-router-dom";
import * as React from "react";
import styles from "./feed.module.css";

export const OrderFeed = () => {
  React.useEffect(() => {
  },[]);
  const history = useHistory();
  
  return (
    <section className={styles.feed__container}>
      <h2 className={styles.feed__title + " mt-10 mb-5 text text_type_main-large"}>Лента заказов</h2>
      <div className={styles.feed__block}>
        <div className={styles.feed__orders}>
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
          <OrderFeedItem />
        </div>
        <div className={styles.feed__orders + " pl-6"}>
          <div className={styles.feed__info}>
            <div className={styles.feed__ready}>
              <p className={styles.feed__status + " text text_type_main-medium"}>Готовы :</p>
              <ul className={styles.feed__status_list}>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034567</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034567</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034567</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034567</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034567</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034567</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034567</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034567</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034567</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034567</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034567</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034567</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034567</li>
              </ul>
            </div>
            <div className={styles.feed__ready}>
              <p className={styles.feed__status + " text text_type_main-medium mb-6"}>В работе :</p>
              <ul className={styles.feed__status_list}>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034000</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034000</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034000</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034000</li>
                <li className={styles.feed__status_number + " text text_type_digits-default"}>034000</li>
              </ul>
            </div>
          </div>
          <div className={styles.feed__total + " mt-15"}>
            <h4 className={styles.feed__total_text + " text text_type_main-medium"}>
              Выполнено за все время :
            </h4>
            <p
              className={
                styles.feed__total_sum + " text text_type_digits-large"
              }
            >
              28 498
            </p>
          </div>
          <div className={styles.feed__total + " mt-15"}>
            <h4 className={styles.feed__total_text + " text text_type_main-medium"}>Выполнено за сегодня :</h4>
            <p
              className={
                styles.feed__total_sum + " text text_type_digits-large"
              }
            >
              176
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // end OrderFeed
};
const n = 3;
export const OrderFeedItem = () => {
  
  const history = useHistory();
  const onClick = () => {
    history.replace({ pathname: "/feed/:id"});
  }
  React.useEffect(() => {
  },[]);
  return (
    <div className={styles.feed__box + " p-6 mb-4"} onClick={onClick}>
      <div className={styles.feed__box_info}>
        <p className={styles.feed__number + " text text_type_digits-default"}>
          #345645
        </p>
        <p className={styles.feed__date + " text text_type_main-small"}>
          Сегодня, 16:20 i-GMT+3
        </p>
      </div>
      <h2 className={styles.burger__name + " text text_type_main-medium mt-6 mb-6"}>
        Death Star Starship Main бургер
      </h2>
      <div className={styles.feed__box_info}>
        <div className={styles.feed__images}>
          <div className={styles.feed__image_box}><div className={styles.feed__image + " text text_type_main-medium"} style={{ backgroundColor: "green" }}>
            {"total>6" ? `+${n}` : ""}
            </div></div>
          <div className={styles.feed__image_box}><div className={styles.feed__image}  style={{ backgroundColor: "red" }}></div></div>
          <div className={styles.feed__image_box}><div className={styles.feed__image}  style={{ backgroundColor: "blue" }}></div></div>
          <div className={styles.feed__image_box}><div className={styles.feed__image}  style={{ backgroundColor: "black" }}></div></div>
          <div className={styles.feed__image_box}><div className={styles.feed__image}  style={{ backgroundColor: "white" }}></div></div>
          <div className={styles.feed__image_box}><div className={styles.feed__image}  style={{ backgroundColor: "yellow" }}></div></div>
        </div>
        <p className={styles.feed__sum + " text text_type_digits-default"}>
          12342
        </p>
      </div>
    </div>
  );
};
