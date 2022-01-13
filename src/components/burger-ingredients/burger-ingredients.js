import React from "react";
import ReactDOM from "react-dom";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { data, dataOrder  } from "../../utils/data.js";
import style from "./burger-ingredients.module.css";

const Ingredients = () => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div style={{ display: "flex" }}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

const Food = ({ item }) => {
  let count = dataOrder.find(el => el._id === item._id);
  return (
    <li className={style.itemMenu}>
    {count !== undefined && count.count && <Counter count={count.count} size="default" />}
      <img src={item.image} alt="упсс" />
      <div className={style.price}>
        <span className="text text_type_digits-default mr-2">
          {item.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default">{item.name}</h3>
    </li>
  );
};

const PutFood = ({ data, ingredients }) => {
  return (
    <ul className={style.menu}>
      {data.map(
        (item, index) =>
          item.type === ingredients && <Food item={item} key={index} />
      )}
    </ul>
  );
};

export default class BurgerIngredients extends React.Component {
  render() {
    return (
      <section className={style.ingredients + " mr-5"}>
        <p className="text text_type_main-large">Соберите бургер</p>
        <Ingredients />
        <ul className={style.list}>
          <li className={style.list + " text text_type_main-medium"}>
            Булки
            <PutFood data={data} ingredients="bun" />
          </li>
          <li className={style.list + " text text_type_main-medium"}>
            Соусы
            <PutFood data={data} ingredients="sauce" />
          </li>
          <li className={style.list + " text text_type_main-medium"}>
            Начинки
            <PutFood data={data} ingredients="main" />
          </li>
        </ul>
      </section>
    );
  }
}
