import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
//   import { useSelector } from "react-redux";
import * as React from "react";
import style from "./style.module.css";
import { Password } from "../components/password/password";
import { EMail } from "../components/email/email";
import { InputName } from "../components/input-name/input-name";
import { MenuField } from "../components/menu-field/menu-field";

export const RegisterPage = () => {
const user =  JSON.stringify({
  "email": "sh-tov@ya.ru", 
  "password": "mas1937", 
  "name": "Stalin" 
})
const register =  async () => {
  const data = await fetch('https://norma.nomoreparties.space/api/auth/register', {
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
    console.log("d>>", data);
};

  return (
    <div className={style.modal}>
      <h2 className={"text text_type_main-medium " + style.title}>
        {" "}
        Регистрация{" "}
      </h2>
      <ul className={style.list}>
        <li className={style.field + " mb-4"}>
          <InputName type="text" placeholder={"Имя"} value=""/>
        </li>
        <li className={style.field + " mb-4"}>
          <EMail />
        </li>
        <li className={style.field + " mb-4"}>
          <Password />
        </li>
      </ul>
      <Button type="primary" size="medium" onClick={register}>
        Зарегистрироваться
      </Button>
      <ul className={style.list}>
        <li className={style.field + " mt-20 mb-4"}>
          <MenuField title={"Уже зарегистрированы?"} linkName={"Войти"} link="login"/>
        </li>
      </ul>
    </div>
  );
};