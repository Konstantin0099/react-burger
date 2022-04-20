import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import * as React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import style from "./style.module.css";
import { MenuField } from "../components/menu-field/menu-field";
import { InputName } from "../components/input-name/input-name";
import { forgotPassword } from "../services/thunk/forgot-reset-password";
import { EMail } from "../components/email/email";

export const ForgotPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // let location = useLocation();
  const recreate = () => {
    dispatch(forgotPassword(history));
  };
  React.useEffect(() => {
  }, [history]);

  const [email, setEmail] = React.useState("");

  const setData = (email) => {
    setEmail(email);
  }

  return (
    <div className={style.modal}>
      <h2 className={"text text_type_main-medium " + style.title}>
        {" "}
        Востановление пароля{" "}
      </h2>
      <ul className={style.list}>
        <li className={style.field + " mb-4"}>
        <EMail setData={setData}/>
          {/* <InputName
            placeholder={"укажите e-mail"}
            type={"email"}
            value=""
            name={"email"}
            setData={setData}
          /> */}
        </li>
      </ul>
      <Button type="primary" size="medium" onClick={recreate}>
        Восстановить
      </Button>
      <ul className={style.list}>
        <li className={style.field + " mt-20 mb-4"}>
          <MenuField title={"Вспомнили?"} linkName={"Войти"} link={"login"} />
        </li>
      </ul>
    </div>
  );
};
