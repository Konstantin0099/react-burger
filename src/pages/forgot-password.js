import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import { useHistory, Redirect } from "react-router-dom";
import style from "./style.module.css";
import { MenuField } from "../components/menu-field/menu-field";
import { forgotPassword } from "../services/thunk/forgot-reset-password";
import { EMail } from "../components/email/email";

export const ForgotPassword = () => {
  const history = useHistory();
  const { authSuccess} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const recreate = () => {
    dispatch(forgotPassword(history, email));
  };
  React.useEffect(() => {}, [history]);

  const [email, setEmail] = React.useState("");
  const setData = (email) => {
    setEmail(email);
  };

  return  authSuccess ? (
    <Redirect to="/" />
  ) : (
    <div className={style.modal}>
      <h2 className={"text text_type_main-medium " + style.title}>
        {" "}
        Востановление пароля{" "}
      </h2>
      <form onsubmit={recreate}>
      <ul className={style.list}>
        <li className={style.field + " mb-4"}>
          <EMail setData={setData} />
        </li>
      </ul>
      <Button type="primary" size="medium" onClick={recreate}>
        Восстановить
      </Button>
      </form>
      <ul className={style.list}>
        <li className={style.field + " mt-20 mb-4"}>
          <MenuField title={"Вспомнили?"} linkName={"Войти"} link={"login"} />
        </li>
      </ul>
    </div>
  );
};
