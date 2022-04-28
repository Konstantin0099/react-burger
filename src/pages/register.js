import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import style from "./style.module.css";
import { Password } from "../components/password/password";
import { EMail } from "../components/email/email";
import { InputName } from "../components/input-name/input-name";
import { MenuField } from "../components/menu-field/menu-field";
import { userAuthRegister } from "../services/thunk/auth-user";
import { useHistory, Redirect } from "react-router-dom";

export const RegisterPage = () => {
  const { authSuccess} = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [newData, setNewData] = React.useState({});

  const register = () => {
    history.replace({ state: {revert: '/'}});
    dispatch(userAuthRegister(history, newData));
  };

  const setData = (data, name) => {
    setNewData({...newData, [name]: data});
  }
  return authSuccess ? (
    <Redirect to="/" />
  ) : (
    <div className={style.modal}>
      <h2 className={"text text_type_main-medium " + style.title}>
        {" "}
        Регистрация{" "}
      </h2>
      <form onsubmit={register}>
      <ul className={style.list}>
        <li className={style.field + " mb-4"}>
          <InputName
            type="text"
            placeholder={"Имя"}
            value={newData.name}
            name={"name"}
            setData={setData}
            icon={"EditIcon"}
          />
        </li>
        <li className={style.field + " mb-4"}>
          <EMail setData={setData} />
        </li>
        <li className={style.field + " mb-4"}>
          <Password setData={setData} />
        </li>
      </ul>
      <Button type="primary" size="medium" onClick={register}>
        Зарегистрироваться
      </Button>
      </form>
      <ul className={style.list}>
        <li className={style.field + " mt-20 mb-4"}>
          <MenuField
            title={"Уже зарегистрированы?"}
            linkName={"Войти"}
            link="login"
          />
        </li>
      </ul>
    </div>
  );
};
