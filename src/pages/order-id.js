import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./order-id.module.css";

export const OrderId = (props) => {
  const history = useHistory();
  const { feed, ordersHistory, data } = useSelector((state) => state);
  const id = props.id;
  if (ordersHistory.total) {
    let orders = [];
    history.location.pathname.indexOf("feed") !== -1 ? (orders = feed.orders) : (orders = ordersHistory.historyOrders);
    const dataIngredients = data.data;
    const order = orders.find((el) => el._id === id);
    const { number, name, status, ingredients, updatedAt } = order;
    let sum = 0;
    ingredients.forEach((element) => {
      dataIngredients.forEach((item) => item._id === element && (sum = sum + item.price));
    });

    return (
      feed.total && (
        <section className={styles.order__container}>
          <p className={styles.order__number + " text text_type_digits-default mb-10"}>{"#" + number}</p>
          <h2 className={styles.order__name + " mb-3 text text_type_main-medium"}>{name}</h2>
          <p className={styles.order__status + " text text_type_main-default mb-15"}>
            {status === "done" && "В работе :"}
          </p>
          <h4 className={styles.order__specification + " mb-6 text text_type_main-medium"}>Состав :</h4>
          <div className={styles.order__ingredients + " pr-6 mb-40"}>
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
                    );} else return null;
                });
              } else {
                return null;
              }
            })}
          </div>
          <div className={styles.order__total + " mt-10"}>
            <p className={styles.order__date + " text text_type_digits-default"}>{updatedAt}</p>
            <p className={styles.order__total_sum + " text text_type_digits-default mr-2"}>{sum}</p>
            <CurrencyIcon type="primary" />
          </div>
        </section>
      )
    );
  } else {
    return <h3>" .... ЗАГРУЗКА ......"</h3>;
  }
};
