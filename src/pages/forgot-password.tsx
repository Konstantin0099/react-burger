import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch} from "react-redux";
import React, {FormEvent} from "react";
import { useHistory, Redirect} from "react-router-dom";
import style from "./style.module.css";
import { MenuField } from "../components/menu-field/menu-field";
import { forgotPassword } from "../services/thunk/forgot-reset-password";
import { EMail } from "../components/email/email";
import { useSelector } from "../services/types/types";

export const ForgotPassword = () => {
  const history = useHistory();
  console.log(" history= ",  history);
  const { authSuccess } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const recreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  const [email, setEmail] = React.useState("");
  const setData = (email: string) => {
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
