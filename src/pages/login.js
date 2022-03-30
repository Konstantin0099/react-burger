import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import style from "./style.module.css";
import { Password } from "../components/password/password";
import { EMail } from "../components/email/email";
import { MenuField } from "../components/menu-field/menu-field";

export const Login = () => {
  const history = useHistory();
  return (
    <div className={style.modal}>
      <h2 className={"text text_type_main-medium " + style.title}> ВХОД </h2>
      <ul className={style.list}>
        <li className={style.field + " mb-4"}>
          <EMail />
        </li>
        <li className={style.field + " mb-4"}>
          <Password />
        </li>
      </ul>
      <Button type="primary" size="medium">
        Войти
      </Button>
      <ul className={style.list}>
        <li className={style.field + " mt-20 mb-4"}>
          <MenuField
            title={"Вы — новый пользователь?"}
            link={"Зарегистрироваться"}
          />
        </li>
        <li className={style.field}>
          <MenuField title={"Забыли пароль?"} link={"Восстановить пароль"} />
        </li>
      </ul>
    </div>
  );
};
