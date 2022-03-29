// import PropTypes from "prop-types";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import * as React from "react";
import { Link, useHistory } from  "react-router-dom";
import style from "./style.module.css";

export const Login = () => {
  const history = useHistory();
  /** EMail поле меню для ввода адреса эл.почты  */
  const EMail = () => {
    const [value, setValue] = React.useState("");
    const onChange = (e) => {
      setValue(e.target.value);
    };
    return (
      <EmailInput onChange={onChange} value={value} name={"email"} placeholder={"kkbkhhh"}></EmailInput>
    );
  };

  /** Password поле меню для ввода пароля  */
  const Password = () => {
    const [value, setValue] = React.useState("");
    const onChange = (e) => {
      setValue(e.target.value);
    };
    return (
      <PasswordInput onChange={onChange} value={value} name={"password"} />
    );
  };

  /** поле меню для перехода по ссылке  */
  const MenuField = ({ title, link }) => {
    return (
      <>
        <h3 className={"text text_type_main-default"}>
          {title + "  "}
          <Link
            to={"#"}
            className={"text text_type_main-default " + style.link}
          >
            {link}
          </Link>
        </h3>
      </>
    );
  };

  return (
    <div className={style.modal}>
      {/* <div className={style.closeIcon + " mt-15 mr-10"}>
        <CloseIcon type="primary" />
      </div> */}
      <h2 className={"text text_type_main-medium " + style.title}> ВХОД </h2>
      <ul className={style.list}>
        <li className={style.field + " mb-4"}>
          <EMail style={{ marginBotton: 24 }} />
        </li>
        <li className={style.field + " mb-4"}>
          <Password />
        </li>
      </ul>
      <Button type="primary" size="medium">
        Войти
      </Button>
      <ul className={style.list}>
        <li className={style.field + " mt-20 mb-4"}>
          <MenuField
            title={"Вы — новый пользователь?"}
            link={"Зарегистрироваться"}
          />
        </li>
        <li className={style.field}>
          <MenuField title={"Забыли пароль?"} link={"Восстановить пароль"} />
        </li>
      </ul>
    </div>
  );
};
// ModalOverlay.propTypes = {
//   toggleVisible: PropTypes.func,
//   onClose: PropTypes.func,
// };


