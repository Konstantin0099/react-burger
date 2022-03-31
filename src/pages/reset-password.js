import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import style from "./style.module.css";
import { MenuField } from "../components/menu-field/menu-field";
import { InputName } from "../components/input-name/input-name";

export const ResetPassword = () => {
  const history = useHistory();
  const user =   {
    "password": "mas12345678",
    "token": " "
}
  const resetPass = async () => {
    const data = await fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      
      body: user
    })
    .then(res => res.json())
      .then(data => data);
      console.log(data);
      return data
  };

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
      <Button type="primary" size="medium" onClick={resetPass}>
        Сохранить
      </Button>
      <ul className={style.list}>
        <li className={style.field + " mt-20 mb-4"}>
          <MenuField
            title={"Вспомнили?"}
            linkName={"Войти"}
          />
        </li>
      </ul>
    </div>
  );
};
