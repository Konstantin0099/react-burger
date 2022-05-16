import styles from "./app-header.module.css";
import { NavLink } from "react-router-dom";
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from "@ya.praktikum/react-developer-burger-ui-components";


const AppHeader = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.navigation + " ml-30 mr-30 pr-30"}>
        <li className={"pt-4 pb-4 m-l12 " + styles.constructor}>
          <BurgerIcon type="primary"/>
          <NavLink
            className={styles.link + " text text_type_main-default"}
            activeClassName={styles.link_active}
            to="/"
            exact
          >
            {" "}
            Конструктор
          </NavLink>
        </li>
        <li className={"pt-4 pb-4 ml-2 ml-12 " + styles.orderList}>
          <ListIcon type="primary"/>
          <NavLink
            exact
            className={styles.link + " text text_type_main-default"}
            activeClassName={styles.link_active}
            to={{ pathname: `/feed` }}
          >
            Лента заказов
          </NavLink>
        </li>
      </ul>
      <span className={styles.logo}>
        <Logo />
      </span>
      <ul className={styles.navigation + " mr-30 ml-30 pl-30"}>
        <li className={"pt-4 pb-4 " + styles.profile}></li>
        <li className={"pt-4 pb-4 " + styles.profile}>
          <ProfileIcon type="primary" />
          <NavLink
            exact
            className={styles.link + " text text_type_main-default"}
            activeClassName={styles.link_active}
            to={{ pathname: `/profile` }}
          >
            Личный кабинет
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default AppHeader;
