import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./feed.module.css";
import { WS_CONNECTION_START } from "../wsRedux/action-types";
import { OPEN_POPUP_ORDER_INGREDIENTS, TOGGLE_VISIBLE  } from "../services/actions/modal";


export const OrderFeedItem = ({ statusVisible = false, id, number, date, name, ingredients }) => {
  // console.log("OrderFeedItem", ingredients);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const history = useHistory();

  const onClick = () => {
    dispatch({ type: OPEN_POPUP_ORDER_INGREDIENTS, item: id});
    dispatch({ type: TOGGLE_VISIBLE });
    history.replace({ pathname: "/feed/:id" });
  };
  
  // history.replace({ pathname: `/ingredients/${item._id}`, state: {visibleModal: true}});
  return (
    <div className={styles.feed__box + " p-6 mb-4"} onClick={onClick}>
      <div className={styles.feed__box_info}>
        <p className={styles.feed__number + " text text_type_digits-default"}>{"#" + number}</p>
        <p className={styles.feed__date + " text text_type_main-small"}>{date}</p>
      </div>
      <h2 className={styles.burger__name + " text text_type_main-medium mt-6 mb-6"}>{name}</h2>
      {statusVisible && <p className={styles.feed__date + " text text_type_main-small"}>Выполнено</p>}
      {listIcon(ingredients, data)}
    </div>
  );
};

export const getListOrders = (orders, statusVisible = false) => {
  return orders.map((element) => {
    let { number, createdAt, name, ingredients, _id } = element;
    return (
      <OrderFeedItem
        key={_id}
        id={_id}
        statusVisible={statusVisible}
        number={number}
        date={createdAt}
        name={name}
        ingredients={ingredients}
      />
    );
  });
};
export const OrderFeed = () => {
  // console.log("OrderFeed");
  const history = useHistory();
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector((state) => state.feed);

  React.useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
  }, []);

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
  const listCreatedOrder = getListNumbersOrders("created");
  // const listFeedOrders = getListOrders(orders);

  return (
    <section className={styles.feed__container}>
      <h2 className={styles.feed__title + " mt-10 mb-5 text text_type_main-large"}>Лента заказов</h2>
      <div className={styles.feed__block}>
        <div className={styles.feed__orders}>{getListOrders(orders)}</div>
        <div className={styles.feed__orders + " pl-6"}>
          <div className={styles.feed__info}>
            <div className={styles.feed__ready}>
              <p className={styles.feed__status + " text text_type_main-medium"}>Готовы :</p>
              <ul className={styles.feed__status_list}>{listDoneOrder}</ul>
            </div>
            <div className={styles.feed__ready}>
              <p className={styles.feed__status + " text text_type_main-medium mb-6"}>В работе :</p>
              <ul className={styles.feed__status_list}>{listCreatedOrder}</ul>
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
};

export const listIcon = (ingredients, data) => {
  // console.log("listIcon");
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
            {countListIcon === 1 && ingredients.length > 6 ? (
              <div className={styles.feed__image__plus__box}>
                <img className={styles.feed__image__plus} src={image} alt="фото ингредиента" />
              </div>
            ) : (
              <img className={styles.feed__image} src={image} alt="фото ингредиента" />
            )}
            <p className={styles.count__plus + " text text_type_digits-default"}>
              {countListIcon === 1 && ingredients.length > 6 && `+${ingredients.length - 5}`}
            </p>
          </div>
        )
      );
    }
  });
  return (
    <div className={styles.feed__box_info}>
      <div className={styles.feed__images}>{list}</div>
      <p className={styles.feed__sum + " text text_type_digits-default"}>{sum}</p>
    </div>
  );
};
