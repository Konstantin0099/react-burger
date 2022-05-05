import { useDispatch, useSelector } from "react-redux";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, useHistory, Redirect } from "react-router-dom";
import style from "./style.module.css";
import { Password } from "../components/password/password";
import { EMail } from "../components/email/email";
import { MenuField } from "../components/menu-field/menu-field";
import { userAuthLogin } from "../services/thunk/auth-user";

export const Login = () => {
  const history = useHistory();
  const { authSuccess } = useSelector((state) => state.user);

  const location = useLocation();
  const dispatch = useDispatch();
  let newData = {};
  const setData = (data, name) => {
    newData = { ...newData, [name]: data };
  };
  /** */
  const getUser = (event) => {
    event.preventDefault();
    history.replace({ state: { revert: "/" } });
    dispatch(userAuthLogin(history, newData, location.state.revert));
  };
  return authSuccess ? (
    <Redirect to="/" />
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
        <Button type="primary" size="medium" onSubmit={getUser}>
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
  );
};
