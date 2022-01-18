import React from "react";
import styles from "./app-header.module.css";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";


export default class AppHeader extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <ul className={styles.navigation + " ml-30 mr-30 pr-30"}>
          <li className={"pt-4 pb-4 m-l12 " + styles.constructor}>
            <BurgerIcon/>
            <a href="#" className={"text text_type_main-default ml-2 mr-5 " + styles.link}>Конструктор</a>
          </li>
          <li className={"pt-4 pb-4 ml-2 ml-12 " + styles.orderList}>
            <ListIcon/>
            <a href="#" className="text text_type_main-default text_color_inactive ml-2">Лента заказов</a>
          </li>
        </ul>
        <span className={styles.logo}><Logo/></span>
        <ul className={styles.navigation + " mr-30 ml-30 pl-30"}>
          <li className={"pt-4 pb-4 " + styles.profile}>
            <ProfileIcon type="primary" />
            <a href="#" className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</a>
          </li>
        </ul>
      </header>
    );
  }
}
