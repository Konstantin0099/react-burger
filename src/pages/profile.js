import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
//   import { useSelector } from "react-redux";
import * as React from "react";
import style from "./style.module.css";
import { Password } from "../components/password/password";
import { EMail } from "../components/email/email";
import { InputName } from "../components/input-name/input-name";
import { MenuField } from "../components/menu-field/menu-field";
import { NavLink } from "react-router-dom";

export const ProfilePage = () => {
  return (
    <div className={style.profile}>
      <ul className={style.menu + " pr-15"}>
        <li className={style.field__profile}>
          <NavLink
            className={style.link_profile}
            activeClassName={style.link_active}
            to={{ pathname: `/profile` }}
          >
            Профиль
          </NavLink>
        </li>
        <li className={style.field__profile}>
          <NavLink className={style.link_profile} to={{ pathname: `/profile` }}>История заказов</NavLink>
        </li>
        <li className={style.field__profile}>
          <NavLink className={style.link_profile} to={{ pathname: `/profile` }}>Выход</NavLink>
        </li>
        <li className={style.field__profile_reshape}>
          <NavLink className={style.link_profile} to={{ pathname: `/profile` }}>
            В этом разделе вы можете изменить свои персональные данные
          </NavLink>
        </li>
      </ul>
      <ul className={style.list}>
        <li className={style.field + " mb-4"}>
          <InputName
            type={"text"}
            placeholder={"Имя"}
            icon={"EditIcon"}
            value={"Марк"}
          />
        </li>
        <li className={style.field + " mb-4"}>
          <InputName
            type={"text"}
            placeholder={"Логин"}
            icon={"EditIcon"}
            value={"mail@stellar.burgers"}
          />
        </li>
        <li className={style.field + " mb-4"}>
          <InputName
            type={"password"}
            placeholder={"Пароль"}
            icon={"EditIcon"}
            value={"12345678"}
          />
        </li>
      </ul>
    </div>
  );
};
