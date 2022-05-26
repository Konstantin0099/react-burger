// import { useDispatch} from "react-redux";
import React, { FormEvent } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, useHistory, Redirect } from "react-router-dom";
import style from "./style.module.css";
import { Password } from "../components/password/password";
import { EMail } from "../components/email/email";
import { MenuField } from "../components/menu-field/menu-field";
import { userAuthLogin } from "../services/thunk/auth-user";
import { getDataUser } from "../services/thunk/data-user";
import { AUTH_LOGIN, AUTH_FAILED, GET_USER  } from "../services/actions/user-auth";
import { checkResponse } from "../services/thunk/checkResponse";
import { useSelector, useDispatch,  TSetData, TLocation } from "../services/types/types";
// type TUserAuthLogin = (history: History<unknown>, newData: {string: string}, revert: string)
// type TSetData = (data: string, name: string) => void


export const Login = () => {
  const { user } = useSelector((state) => state);
  const history = useHistory();
  const { authSuccess, authRequest } = useSelector((state) => state.user);

  const location: TLocation = useLocation();
  const dispatch = useDispatch();
  console.log("location", location)
  React.useEffect(() => {
    !user.name && dispatch(getDataUser());
  }, [dispatch, user.name]);

  let newData = {};
  const setData: TSetData = (data, name) => {
    newData = { ...newData, [name]: data };
  };

  /**отправить данные user для авторизации */
  const getUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.replace({ state: { revert: "/" } });
    location.state && dispatch(userAuthLogin(history, newData, location.state.revert));
  };
  return !authRequest ? (
    authSuccess ? (
      <Redirect to={location.state.revert} />
    ) : (
      <div className={style.modal}>
        <h2 className={"text text_type_main-medium " + style.title}> ...ВХОД... </h2>
        <form onSubmit={getUser}>
          <ul className={style.list}>
            <li className={style.field + " mb-4"}>
              <EMail setData={setData} />
            </li>
            <li className={style.field + " mb-4"}>
              <Password setData={setData} />
            </li>
          </ul>
          <Button type="primary" size="medium">
            Войти
          </Button>
        </form>
        <ul className={style.list}>
          <li className={style.field + " mt-20 mb-4"}>
            <MenuField title={"Вы — новый пользователь?"} linkName={"Зарегистрироваться"} link="register" />
          </li>
          <li className={style.field}>
            <MenuField title={"Забыли пароль?"} linkName={"Восстановить пароль"} link="forgot-password" />
          </li>
        </ul>
      </div>
    )
  ) : (
    <p>........авторизация </p>
  );
};
