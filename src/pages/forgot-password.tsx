import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FormEvent, FC } from "react";
import { useHistory, Redirect } from "react-router-dom";
import style from "./style.module.css";
import { MenuField } from "../components/menu-field/menu-field";
import { forgotPassword } from "../services/thunk/forgot-reset-password";
import { EMail } from "../components/email/email";
import { useSelector, useDispatch } from "../services/types/types";

export const ForgotPassword: FC = () => {
  const history = useHistory();
  const { authSuccess } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const recreate = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(forgotPassword(history, email));
  };
  const [email, setEmail] = React.useState<string>("");
  const setData = (email: string): void => {
    setEmail(email);
  };

  return authSuccess ? (
    <Redirect to="/" />
  ) : (
    <div className={style.modal}>
      <h2 className={"text text_type_main-medium " + style.title}> Востановление пароля1 </h2>
      <form onSubmit={recreate}>
        <ul className={style.list}>
          <li className={style.field + " mb-4"}>
            <EMail setData={setData} />
          </li>
        </ul>
        <Button type="primary" size="medium">
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
