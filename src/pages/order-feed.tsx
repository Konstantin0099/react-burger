import React, { FC } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../services/types/types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed.module.css";
import { OPEN_POPUP_ORDER_INGREDIENTS, VISIBLE_MODAL } from "../services/actions/modal";
import { wsConnectionStartFeed } from "../services/wsRedux/action-types";
import { IItem } from "../services/actions";
import { TLocation } from "../services/types/types";

type TOrderItem = {
  urlList: string;
  statusVisible: boolean;
  id: string;
  number: number;
  date: string;
  name: string;
  ingredients: Array<string>;
  cbOnClick: any;
  location: TLocation;
};

export const OrderItem: FC<TOrderItem> = ({
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
      {listIcon({ ingredients, data })}
    </div>
  );
};

export const whatDateOrder = (msDate: string | number | Date): string => {
  const today: Date = new Date();
  const date: Date = new Date(msDate);
  const differenceSeconds: number = (+today - +date) / 1000;
  const hoursOrder = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const secondsToday = seconds + minutes * 60 + hours * 3600;
  let reg = /(\d\d:\d\d):\d\d+\s(\w{3}[+]\d{4})/;
  let h: RegExpMatchArray | null = `${hoursOrder}`.match(reg);
  let timeOrder = "";
  if (h !== null) timeOrder = [h[1], h[2]].join(" ");
  if (differenceSeconds < secondsToday) {
    return `сегодня  ${timeOrder}`;
  } else if (differenceSeconds < secondsToday + 24 * 3600) {
    return `вчера ${timeOrder}`;
  } else return `${Math.ceil(differenceSeconds / (24 * 3600))} дня назад, ${timeOrder}`;
};


export const getListOrders = (
  func: {
    (
      id: string,
      urlList: string,
      dispatch: (arg0: {
        type: "VISIBLE_MODAL" | "OPEN_POPUP_ORDER_INGREDIENTS";
        item?: string;
        pathname?: string;
      }) => void,
      history: { pathname: string }[],
      location: TLocation
    ): void;
  },
  orders: any[],
  statusVisible = false,
  urlList: string,
  location: TLocation
) => {
  return orders.map(
    (element: { number: number; createdAt: string; name: string; ingredients: Array<string>; _id: string }) => {
      let { number, createdAt, name, ingredients, _id } = element;
      const longTime: string = whatDateOrder(Date.parse(createdAt));
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
    }
  );
};
export const func = (
  id: string,
  urlList: string,
  dispatch: (arg0: {
    type: "VISIBLE_MODAL" | "OPEN_POPUP_ORDER_INGREDIENTS";
    item?: string;
    pathname?: string;
  }) => void,
  history: { pathname: string }[],
  location: TLocation
) => {
  dispatch({ type: OPEN_POPUP_ORDER_INGREDIENTS, item: id });
  dispatch({ type: VISIBLE_MODAL, pathname: urlList });
  history.push({ pathname: `${urlList}/${id}` });
};

export const OrderFeed: FC = () => {
  const location: TLocation = useLocation();
  const dispatch = useDispatch();
  const { socket, orders, total, totalToday } = useSelector((state) => state.feed);
  React.useEffect(() => {
    dispatch(wsConnectionStartFeed());
    return () => {
      socket && socket.close();
    };
  }, [dispatch, total]);

  const getListNumbersOrders = (status: string) =>
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

export const listIcon: FC<{ ingredients: Array<string>; data: Array<IItem> }> = ({ ingredients, data }) => {
  let sum: number = 0;
  let countListIcon: number = 0;
  const list = ingredients.map(
    (ingredient: string, index: React.Key | null | undefined, ingredients: Array<string>) => {
      countListIcon++;
      const el = data.find((item: { _id: string }) => {
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
    }
  );

  return (
    <div className={styles.feed__box_info}>
      <div className={styles.feed__images}>{list}</div>
      <p className={styles.feed__sum + " text text_type_digits-default"}>{sum}</p>
      <CurrencyIcon type="primary" />
    </div>
  );
};
