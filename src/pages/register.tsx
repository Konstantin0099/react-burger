import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FormEvent, FC } from "react";
import style from "./style.module.css";
import { Password } from "../components/password/password";
import { EMail } from "../components/email/email";
import { InputName } from "../components/input-name/input-name";
import { MenuField } from "../components/menu-field/menu-field";
import { userAuthRegister } from "../services/thunk/auth-user";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector, TSetData, TNewData } from "../services/types/types";

export const RegisterPage: FC = () => {
  const { authSuccess } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [newData, setNewData] = React.useState<Omit<TNewData, "token">>({ name: "", password: "", email: "" });

  const register = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    history.replace({ state: { revert: "/" } });
    dispatch(userAuthRegister(history, newData));
  };

  const setData: TSetData = (data, name) => {
    setNewData({ ...newData, [name]: data });
  };
  return authSuccess ? (
    <Redirect to="/" />
  ) : (
    <div className={style.modal}>
      <h2 className={"text text_type_main-medium " + style.title}> Регистрация </h2>
      <form onSubmit={register}>
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
        <Button type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <ul className={style.list}>
        <li className={style.field + " mt-20 mb-4"}>
          <MenuField title={"Уже зарегистрированы?"} linkName={"Войти"} link="login" />
        </li>
      </ul>
    </div>
  );
};
