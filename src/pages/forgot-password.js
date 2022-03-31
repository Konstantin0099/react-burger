import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import style from "./style.module.css";
// import { Password } from "../components/password/password";
// import { EMail } from "../components/email/email";
import { MenuField } from "../components/menu-field/menu-field";
import { InputName } from "../components/input-name/input-name";

export const ForgotPassword = () => {
  const history = useHistory();
 const emailUser = JSON.stringify({
  "email": "sh-tov@ya.ru"
})
  const recreate = async () => {
    const data = await fetch('https://norma.nomoreparties.space/api/password-reset', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      
      body: emailUser
    })
    .then(res => res.json())
      .then(data => data);
      console.log(data);
      return data
  };



  return (
    <div className={style.modal }>
      <h2 className={"text text_type_main-medium " + style.title}> Востановление пароля </h2>
      <ul className={style.list}>
      <li className={style.field + " mb-4"}>
          <InputName placeholder={"укажите e-mail"} value=""/>
        </li>
      </ul>
      <Button type="primary" size="medium" onClick={recreate}>
        Восстановить
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
