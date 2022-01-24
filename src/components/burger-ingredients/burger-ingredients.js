import React from "react";
import PropTypes from "prop-types";
import style from "./burger-ingredients.module.css";
import { MenuSection } from "../menu-section/menu-section.js";
import { Tabs } from "../tabs/tabs.js";

export default class BurgerIngredients extends React.Component {
  render() {
    return (
      <section className={style.ingredients + " mr-5 pt-5"}>
        <p className="text text_type_main-large pb-5">Соберите бургер</p>
        <Tabs />
        <ul className={style.list + " pt-10"}>
          <li className={style.listBlock + " text text_type_main-medium"}>
            Булки
            <MenuSection
              data={this.props.data}
              ingredient="bun"
              dataOrder={this.props.dataOrder}
            />
          </li>
          <li className={style.listBlock + " text text_type_main-medium"}>
            Соусы
            <MenuSection
              data={this.props.data}
              ingredient="sauce"
              dataOrder={this.props.dataOrder}
            />
          </li>
          <li className={style.listBlock + " text text_type_main-medium"}>
            Начинки
            <MenuSection
              data={this.props.data}
              ingredient="main"
              dataOrder={this.props.dataOrder}
            />
          </li>
        </ul>
      </section>
    );
  }
}

BurgerIngredients.propTypes = {
  dataOrder: PropTypes.array,
  data: PropTypes.array,
};
