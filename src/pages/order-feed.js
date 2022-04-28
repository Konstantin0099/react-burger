import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./feed.module.css";
import {
  WS_CONNECTION_START,
} from "../wsRedux/action-types";

export const getListOrders = (orders, statusVisible) =>
orders.map((element) => {
  let { number, createdAt, name, ingredients, _id } = element;
  return <OrderFeedItem key={_id} statusVisible={statusVisible} number={number} date={createdAt} name={name} ingredients={ingredients} />;
});


export const OrderFeed = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector((state) => state.feed);

  React.useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
    // console.log("OrderFeed", orders, total, totalToday, getListOrders);
    // getListOrders()
  }, []);

  // <Food item={item} key={item._id} count={countOrder} />

  const getListNumbersOrders = (status) =>
    orders.map(
      (element) =>
        element.status === status && (
          <li key={element._id} className={styles.feed__status_number + " text text_type_digits-default"}>
            {element.number}
          </li>
        )
    );
  const listDoneOrder = getListNumbersOrders("done");
  const listWorkOrder = getListNumbersOrders("created");
  const listFeedOrders = getListOrders(orders);

  return (
    <section className={styles.feed__container}>
      <h2 className={styles.feed__title + " mt-10 mb-5 text text_type_main-large"}>Лента заказов</h2>
      <div className={styles.feed__block}>
        <div className={styles.feed__orders}>
          {listFeedOrders}
        </div>
        <div className={styles.feed__orders + " pl-6"}>
          <div className={styles.feed__info}>
            <div className={styles.feed__ready}>
              <p className={styles.feed__status + " text text_type_main-medium"}>Готовы :</p>
              <ul className={styles.feed__status_list}>{listDoneOrder}</ul>
            </div>
            <div className={styles.feed__ready}>
              <p className={styles.feed__status + " text text_type_main-medium mb-6"}>В работе :</p>
              <ul className={styles.feed__status_list}>{listWorkOrder}</ul>
            </div>
          </div>
          <div className={styles.feed__total + " mt-15"}>
            <h4 className={styles.feed__total_text + " text text_type_main-medium"}>Выполнено за все время :</h4>
            <p className={styles.feed__total_sum + " text text_type_digits-large"}>{total}</p>
          </div>
          <div className={styles.feed__total + " mt-15"}>
            <h4 className={styles.feed__total_text + " text text_type_main-medium"}>Выполнено за сегодня :</h4>
            <p className={styles.feed__total_sum + " text text_type_digits-large"}>{totalToday}</p>
          </div>
        </div>
      </div>
    </section>
  );

  // end OrderFeed
};

export const OrderFeedItem = ({ statusVisible = false, number, date, name, ingredients }) => {
  const { data } = useSelector((state) => state.data);
  const history = useHistory();
  const onClick = () => {
    history.replace({ pathname: "/feed/:id" });
  };
  const listIcon = (ingredients) => {
    let sum = 0;
    let countListIcon = 0;
    const list = ingredients.map((ingredient, index, ingredients) => {
      countListIcon++;
      const el = data.find((item) => {
        return item._id === ingredient;
      });
      if (el) {
        let image = el.image;
        sum = sum + el.price;
        return (
          countListIcon <= 6 && (
            <div key={index} className={styles.feed__image_box}>
              {countListIcon === 1 && ingredients.length > 6 
              ? <div className={styles.feed__image__plus__box}><img className={styles.feed__image__plus} src={image} alt="фото ингредиента" /></div>
              : <img className={styles.feed__image} src={image} alt="фото ингредиента" />}
              <p className={styles.count__plus + " text text_type_digits-default"}>
                {countListIcon === 1 && ingredients.length > 6 && `+${ingredients.length - 5}`}
              </p>
            </div>
          )
        );
      }
    });

    // console.log("list",list);
    return (
      <div className={styles.feed__box_info}>
        <div className={styles.feed__images}>{list}</div>
        <p className={styles.feed__sum + " text text_type_digits-default"}>{sum}</p>
      </div>
    );
  };

  const domElementListIcon = listIcon(ingredients);
  // console.log("domElementListIcon", domElementListIcon);
  React.useEffect(() => {}, []);
  return (
    <div className={styles.feed__box + " p-6 mb-4"} onClick={onClick}>
      <div className={styles.feed__box_info}>
        <p className={styles.feed__number + " text text_type_digits-default"}>{"#" + number}</p>
        <p className={styles.feed__date + " text text_type_main-small"}>{date}</p>
      </div>
      <h2 className={styles.burger__name + " text text_type_main-medium mt-6 mb-6"}>{name}</h2>
      {statusVisible && <p className={styles.feed__date + " text text_type_main-small"}>Выполнено</p>}
      {domElementListIcon}
    </div>
  );
};
