import React from "react";
import { data, dataOrder  } from "../../utils/data.js";
import style from "./burger-ingredients.module.css";
import {PutFood} from "../put-food/put-food.js";
import {Ingredients} from "../ingredients/ingredients.js";


export default class BurgerIngredients extends React.Component {

  render() {
    return (
      <section className={style.ingredients + " mr-5 pt-5"}>
        <p className="text text_type_main-large pb-5">Соберите бургер</p>
        <Ingredients />
        <ul className={style.list + " pt-10"}>
          <li className={style.listBlock + " text text_type_main-medium"}>
            Булки
            <PutFood data={data} ingredient="bun" />
          </li>
          <li className={style.listBlock + " text text_type_main-medium"}>
            Соусы
            <PutFood data={data} ingredient="sauce" />
          </li>
          <li className={style.listBlock + " text text_type_main-medium"}>
            Начинки
            <PutFood data={data} ingredient="main" />
          </li>
        </ul>
      </section>
    );
  }
}


