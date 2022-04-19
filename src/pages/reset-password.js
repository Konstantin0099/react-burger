import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as React from "react";
import style from "./style.module.css";
import { MenuField } from "../components/menu-field/menu-field";
import { InputName } from "../components/input-name/input-name";
import { resetPassword } from "../services/thunk/forgot-reset-password";

export const ResetPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let location = useLocation();
  const resetPass = () => {
    dispatch(resetPassword(history));
  };
  // console.log("ResetPassword", history, !location.hasOwnProperty('state'), !location.state, "location=", location);
  React.useEffect(() => {
    !location.hasOwnProperty("state")
      ? history.replace({ pathname: "/forgot-password" })
      : !location.state && history.replace({ pathname: "/forgot-password" });
  }, [history]);

  return (
    <div className={style.modal}>
      <h2 className={"text text_type_main-medium " + style.title}>
        {" "}
        Востановление пароля{" "}
      </h2>
      <ul className={style.list}>
        <li className={style.field + " mb-4"}>
          <InputName
            placeholder={"введите новый пароль"}
            type="text"
            value=""
          />
        </li>
        <li className={style.field + " mb-4"}>
          <InputName
            placeholder={"введите код из письма"}
            type="text"
            value=""
          />
        </li>
      </ul>
      <Button type="primary" size="medium" onClick={resetPass}>
        Сохранить
      </Button>
      <ul className={style.list}>
        <li className={style.field + " mt-20 mb-4"}>
          <MenuField title={"Вспомнили?"} linkName={"Войти"} />
        </li>
      </ul>
    </div>
  );
};
