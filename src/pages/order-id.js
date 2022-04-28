import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import * as React from "react";
import styles from "./order-id.module.css";
import { useDispatch, useSelector } from "react-redux";

export const OrderId = () => {
  const { openPopup, feed, data } = useSelector((state) => state);
  const id = openPopup.item;
  const orders = feed.orders;
  const dataIngredients = data.data;
  const order = orders.find(el => el._id === id);
  const { number, name, status, ingredients, updatedAt} = order;
  // console.log("OrderId order=", dataIngredients, ingredients);
  const listInrgedients = ingredients.map((el) => {
    return dataIngredients.map((item, index) => {
         if (el === item._id) return (
          <div key={index} className={styles.order__ingredient + " mb-4"}>
          <div className={styles.order__image__box}>
          <img className={styles.order__image} src={item.image} alt="фото ингредиента" />
          </div>
          <p className={styles.order__ingredient_name + " text text_type_main-medium"}>{item.name}</p>
          <p className={styles.order__ingredient_sum + " text text_type_main-medium"}>{item.price}</p>
        </div>
         )
    })
  })

  const history = useHistory();
  return (
    <section className={styles.order__container}>
      <p className={styles.order__number + " text text_type_digits-medium mb-10"}>
        {number}
      </p>
      <h2
        className={styles.order__name + " mb-3 text text_type_main-medium"}
      >
        {name}
      </h2>
      <p className={styles.order__status + " text text_type_main-medium mb-15"}>
        {status === "done" && "В работе :"}
        {/* {status === done && "В работе :"}
        {status === done && "В работе :"} */}
      </p>
      <h4
        className={
          styles.order__specification + " mb-6 text text_type_main-medium"
        }
      >
        Состав :
      </h4>
      <div className={styles.order__ingredients + " pr-6 mb-40"}>

      {listInrgedients}
       
      </div>
      <div className={styles.order__total + " mt-10"}>
        <p className={styles.order__date + " text text_type_main-medium"}>
        {updatedAt}
        </p>
        <p
          className={
            styles.order__total_sum + " text text_type_main-medium"
          }
        >
          510 руб
        </p>
      </div>
    </section>
  );
};
