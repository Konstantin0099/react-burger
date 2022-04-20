import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
// import { useRef } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
// import { useSelector } from "react-redux";
// import * as React from "react";
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import style from "./style.module.css";
import { Password } from "../components/password/password";
import { EMail } from "../components/email/email";
import { MenuField } from "../components/menu-field/menu-field";
import { userAuthLogin } from "../services/thunk/auth-user";
import { logout } from "../services/thunk/logout";

export const Login = () => {
  const history = useHistory();
  // const [data, useData] = useState({})
  const params = useParams();
  const match = useRouteMatch();
  const location = useLocation();
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  let newData = {};
  const setData = (data, name) => {
    newData = {...newData, [name]: data};
    // console.log("newData", newData); 
  }
  /** */
  const getUser = () => {
    history.replace({ state: {revert: '/'}});
    const inputError = document.getElementsByClassName("input__error");
      // console.log(" Login location", location, history.replace({ state: {revert: '/'}}));
dispatch(userAuthLogin(history, newData, location.state.revert))
  };
  useEffect(() => {
  }, [])
  return (
    <div className={style.modal}>
      <h2 className={"text text_type_main-medium " + style.title}> ВХОД </h2>
      <ul className={style.list}>
        <li className={style.field + " mb-4"}>
          <EMail setData={setData}/>
        </li>
        <li className={style.field + " mb-4"}>
          <Password setData={setData}/>
        </li>
      </ul>
      <Button type="primary" size="medium" onClick={getUser}>
        Войти
      </Button>
      <ul className={style.list}>
        <li className={style.field + " mt-20 mb-4"}>
          <MenuField
            title={"Вы — новый пользователь?"}
            linkName={"Зарегистрироваться"}
            link="register"
          />
        </li>
        <li className={style.field}>
          <MenuField
            title={"Забыли пароль?"}
            linkName={"Восстановить пароль"}
            link="forgot-password"
          />
        </li>
      </ul>
    </div>
  );
};
