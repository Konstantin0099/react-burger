import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed.module.css";
import { OPEN_POPUP_ORDER_INGREDIENTS, VISIBLE_MODAL } from "../services/actions/modal";
import { wsConnectionStartFeed } from "../services/wsRedux/action-types";

export const OrderItem = ({
  urlList,
  statusVisible = false,
  id,
  number,
  date,
  name,
  ingredients,
  cbOnClick,
  location,
}) => {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const history = useHistory();
  const onClick = () => {
    cbOnClick(id, urlList, dispatch, history, location);
  };
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

export const whatDateOrder = (msDate) => {
  const today = new Date();
  const date = new Date(msDate);
  const differenceSeconds = (today - date) / 1000;
  const hoursOrder = new Date();
  hoursOrder.getUTCHours(12, 55);
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const secondsToday = seconds + minutes * 60 + hours * 3600;
  let reg = /(\d\d:\d\d):\d\d+\s(\w{3}[+]\d{4})/;
  let h = `${hoursOrder}`.match(reg);
  h = [h[1], h[2]].join(" ");
  if (differenceSeconds < secondsToday) {
    return `сегодня  ${h}`;
  } else if (differenceSeconds < secondsToday + 24 * 3600) {
    return `вчера ${h}`;
  } else return `${Math.ceil(differenceSeconds / (24 * 3600))} дня назад, ${h}`;
};

export const getListOrders = (func, orders, statusVisible = false, urlList, location) => {
  return orders.map((element) => {
    let { number, createdAt, name, ingredients, _id } = element;
    const longTime = whatDateOrder(Date.parse(createdAt));
    return (
      <OrderItem
        urlList={urlList}
        key={_id}
        id={_id}
        statusVisible={statusVisible}
        number={number}
        date={longTime}
        name={name}
        ingredients={ingredients}
        cbOnClick={func}
        location={location}
      />
    );
  });
};
export const func = (id, urlList, dispatch, history, location) => {
  dispatch({ type: OPEN_POPUP_ORDER_INGREDIENTS, item: id });
  dispatch({ type: VISIBLE_MODAL, pathname: urlList });
  history.push({ pathname: `${urlList}/${id}` });
};

export const OrderFeed = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { socket, orders, total, totalToday } = useSelector((state) => state.feed);
  React.useEffect(() => {
    dispatch(wsConnectionStartFeed());
    return () => {
      socket && socket.close();
    };
  }, [dispatch, total]);

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
  const urlList = "/feed";
  const statusVisible = true;
  return (
    <section className={styles.feed__container}>
      {total ? (
        <>
          <h2 className={styles.feed__title + " mt-10 mb-5 text text_type_main-large"}>Лента заказов</h2>
          <div className={styles.feed__block}>
            <div className={styles.feed__orders}>{getListOrders(func, orders, statusVisible, urlList, location)}</div>
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
        </>
      ) : (
        <p>.......ЗАГРУЗКА..OrderFeed.......</p>
      )}
    </section>
  );
};

export const listIcon = (ingredients, data) => {
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
    } else {
      return null;
    }
  });

  return (
    <div className={styles.feed__box_info}>
      <div className={styles.feed__images}>{list}</div>
      <p className={styles.feed__sum + " text text_type_digits-default"}>{sum}</p>
      <CurrencyIcon type="primary" />
    </div>
  );
};
