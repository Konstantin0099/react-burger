import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import * as React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { whatDateOrder } from "./order-feed";
import styles from "./order-id.module.css";
import { wsConnectionStartFeed, wsConnectionStartHistory } from "../services/wsRedux/action-types";

export const OrderId = ({ id }) => {
  let list = {};
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);
  const { feed, ordersHistory } = useSelector((state) => state);
  history.location.pathname.indexOf("feed") !== -1
    ? (list = { ws: feed, wsConnection: wsConnectionStartFeed })
    : (list = { ws: ordersHistory, wsConnection: wsConnectionStartHistory });
  let { orders, total, socket } = list.ws;
  React.useEffect(() => {
    dispatch(list.wsConnection());
    return () => {
      socket && socket.close();
    };
  }, [dispatch, feed.total, history.location.pathname]);
  if (total) {
    /** массив имеющихся ингредиентов */
    const dataIngredients = data.data;
    /**выбраный заказ из массива */
    const order = orders.find((el) => el._id === id);
    const { number, name, status, ingredients, updatedAt } = order;
    let sum = 0;
    let h = whatDateOrder(updatedAt);
    ingredients.forEach((element) => {
      dataIngredients.forEach((item) => item._id === element && (sum = sum + item.price));
    });

    return (
      total && (
        <section className={styles.order__container}>
          <p className={styles.order__number + " text text_type_digits-default mb-10"}>{"#" + number}</p>
          <h2 className={styles.order__name + " mb-3 text text_type_main-medium"}>{name}</h2>
          <p className={styles.order__status + " text text_type_main-default mb-15"}>
            {status === "done" && "В работе :"}
          </p>
          <h4 className={styles.order__specification + " mb-6 text text_type_main-medium"}>Состав :</h4>
          <div className={styles.order__ingredients + " mb-40"}>
            {ingredients.map((el, index, ingredients) => {
              let countInOrder = 0;
              ingredients.forEach((element) => {
                element === el && countInOrder++;
              });
              const indexEl = ingredients.indexOf(el);
              indexEl !== index && (countInOrder = 0);

              if (!!countInOrder) {
                return dataIngredients.map((item, index) => {
                  if (el === item._id) {
                    return (
                      <div key={index} className={styles.order__ingredient + " mb-4"}>
                        <div className={styles.order__image__box + " mr-4"}>
                          <img className={styles.order__image} src={item.image} alt="фото ингредиента" />
                        </div>
                        <p className={styles.order__ingredient_name + " text text_type_main-default"}>{item.name}</p>
                        <p className={styles.order__ingredient_sum + " text text_type_digits-default mr-4"}>
                          {countInOrder > 1 ? countInOrder + " X " + item.price : item.price}
                        </p>
                        <CurrencyIcon type="primary" />
                      </div>
                    );
                  } else return null;
                });
              } else return null;
            })}
          </div>
          <div className={styles.order__total + " mt-10"}>
            <p className={styles.order__date + " text text_type_digits-default"}>{h}</p>
            <p className={styles.order__total_sum + " text text_type_digits-default mr-2"}>{sum}</p>
            <CurrencyIcon type="primary" />
          </div>
        </section>
      )
    );
  } else {
    return <h3>" .... ЗАГРУЗКА .OrderId....."</h3>;
  }
};
