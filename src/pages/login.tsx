import React, { FormEvent, FC } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, useHistory, Redirect } from "react-router-dom";
import style from "./style.module.css";
import { Password } from "../components/password/password";
import { EMail } from "../components/email/email";
import { MenuField } from "../components/menu-field/menu-field";
import { userAuthLogin } from "../services/thunk/auth-user";
import { getDataUser } from "../services/thunk/data-user";
import { useSelector, useDispatch, TSetData, TLocation } from "../services/types/types";

export const Login: FC<{}> = () => {
  const { user } = useSelector((state) => state);
  const { replace } = useHistory();
  const { authSuccess, authRequest } = useSelector((state) => state.user);
  const location: TLocation = useLocation();
  const dispatch = useDispatch();
  React.useEffect(() => {
    !user.name && dispatch(getDataUser());
  }, [dispatch, user.name]);

  let newData: { name?: string } = {};
  const setData: TSetData = (data, name) => {
    newData = { ...newData, [name]: data };
  };

  /**отправить данные user для авторизации */
  const getUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    replace({ state: { revert: "/" } });
    location.state && dispatch(userAuthLogin(replace, newData, location.state.revert));
  };
  return !authRequest ? (
    authSuccess ? (
      <Redirect to={location.state.revert} />
    ) : (
      <div className={style.modal}>
        <h2 className={"text text_type_main-medium " + style.title}> ВХОД </h2>
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
    <p>........авторизация......... </p>
  );
};
