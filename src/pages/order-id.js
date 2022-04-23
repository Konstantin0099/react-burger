import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import * as React from "react";
import styles from "./order-id.module.css";

export const OrderId = () => {
  React.useEffect(() => {}, []);
  const history = useHistory();
  return (
    <section className={styles.order__container}>
      <p className={styles.order__number + " text text_type_digits-medium mb-10"}>
        #034999
      </p>
      <h2
        className={styles.order__name + " mb-3 text text_type_main-medium"}
      >
        Black Hole Singularity острый бургер
      </h2>
      <p className={styles.order__status + " text text_type_main-medium mb-15"}>
        В работе :
      </p>
      <h4
        className={
          styles.order__specification + " mb-6 text text_type_main-medium"
        }
      >
        Состав :
      </h4>
      <div className={styles.order__ingredients + " pr-6 mb-40"}>
        <div className={styles.order__ingredient + " mb-4"}>
          <div className={styles.order__image}></div>
          <p className={styles.order__ingredient_name + " text text_type_main-medium"}>Флюоресцентная булка R2-D3</p>
          <p className={styles.order__ingredient_sum + " text text_type_main-medium"}>2 x 20</p>
        </div>
        <div className={styles.order__ingredient + " mb-4"}>
          <div className={styles.order__image}></div>
          <p className={styles.order__ingredient_name + " text text_type_main-medium"}>Флюоресцентная булка R2-D3</p>
          <p className={styles.order__ingredient_sum + " text text_type_main-medium"}>2 x 20</p>
        </div>
        <div className={styles.order__ingredient + " mb-4"}>
          <div className={styles.order__image}></div>
          <p className={styles.order__ingredient_name + " text text_type_main-medium"}>Флюоресцентная булка R2-D3</p>
          <p className={styles.order__ingredient_sum + " text text_type_main-medium"}>2 x 20</p>
        </div>
        <div className={styles.order__ingredient + " mb-4"}>
          <div className={styles.order__image}></div>
          <p className={styles.order__ingredient_name + " text text_type_main-medium"}>Флюоресцентная булка R2-D3</p>
          <p className={styles.order__ingredient_sum + " text text_type_main-medium"}>2 x 20</p>
        </div>
        <div className={styles.order__ingredient + " mb-4"}>
          <div className={styles.order__image}></div>
          <p className={styles.order__ingredient_name + " text text_type_main-medium"}>Флюоресцентная булка R2-D3</p>
          <p className={styles.order__ingredient_sum + " text text_type_main-medium"}>2 x 20</p>
        </div>
       
      </div>
      <div className={styles.order__total + " mt-10"}>
        <p className={styles.order__date + " text text_type_main-medium"}>
        Вчера, 13:50 i-GMT+3
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
