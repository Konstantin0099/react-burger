import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import style from "./style.module.css";
import { MenuField } from "../components/menu-field/menu-field";
import { InputName } from "../components/input-name/input-name";

export const ResetPassword = () => {
  const history = useHistory();
  return (
    <div className={style.modal}>
      <h2 className={"text text_type_main-medium " + style.title}> Востановление пароля </h2>
      <ul className={style.list}>
      <li className={style.field + " mb-4"}>
          <InputName placeholder={"введите новый пароль"}/>
        </li>
        <li className={style.field + " mb-4"}>
          <InputName placeholder={"введите код из письма"}/>
        </li>
      </ul>
      <Button type="primary" size="medium">
        Сохранить
      </Button>
      <ul className={style.list}>
        <li className={style.field + " mt-20 mb-4"}>
          <MenuField
            title={"Вспомнили?"}
            link={"Войти"}
          />
        </li>
      </ul>
    </div>
  );
};
