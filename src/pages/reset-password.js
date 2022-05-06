import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import * as React from "react";
import style from "./style.module.css";
import { MenuField } from "../components/menu-field/menu-field";
import { InputName } from "../components/input-name/input-name";
import { resetPassword } from "../services/thunk/forgot-reset-password";

export const ResetPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [newData, setNewData] = React.useState({});
  const resetPass = (e) => {
    e.preventDefault();
    history.replace({ state: {revert: '/'}});
    dispatch(resetPassword(history, newData));
  };
  const setData = (data, name) => {
    setNewData({...newData, [name]: data});
  }

  React.useEffect(() => {
    !location.hasOwnProperty("state")
      ? history.replace({ pathname: "/forgot-password" })
      : !location.state && history.replace({ pathname: "/forgot-password" });
  }, [history, location]);
  return (
    <div className={style.modal}>
      <h2 className={"text text_type_main-medium " + style.title}>
        {" "}
        Востановление пароля{" "}
      </h2>
      <form onSubmit={resetPass}>
      <ul className={style.list}>
        <li className={style.field + " mb-4"}>
          <InputName
            icon={"EditIcon"}
            placeholder={"введите новый пароль"}
            type={"password"}
            name={"password"}
            value={newData.password}
            setData={setData}
          />
        </li>
        <li className={style.field + " mb-4"}>
          <InputName
            icon={"EditIcon"}
            placeholder={"введите код из письма"}
            type="text"
            name={"token"}
            value={newData.token}
            setData={setData}
          />
        </li>
      </ul>
      <Button type="primary" size="medium">
        Сохранить
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
