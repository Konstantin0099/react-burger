// import PropTypes from "prop-types";
import {
  ShowIcon,
  EmailInput,
  CloseIcon,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import React from "react";

import style from "./login.module.css";
import { overlay } from "../modal.module.css";

export const Login = () => {
  //   const { openPopup } = useSelector((state) => state);
  //   const [value, setValue] = React.useState('bob@example.com')

  const EMail = () => {
    const [value, setValue] = React.useState("bob@example.com");
    const onChange = (e) => {
      setValue(e.target.value);
    };
    return (
      <EmailInput onChange={onChange} value={value} name={"email"}>
        <ShowIcon type="primary" />
      </EmailInput>
    );
  };
  const Password = () => {
    const [value, setValue] = React.useState("password");
    const onChange = (e) => {
      setValue(e.target.value);
    };
    return (
      <PasswordInput onChange={onChange} value={value} name={"password"} />
    );
  };
  const Link = ({ title, link }) => {
    return (
      <h3 className={"text text_type_main-default"}>{title + " " + link}</h3>
    );
  };

  return (
    <div className={style.modal}>
      <div className={style.closeIcon + " mt-15 mr-10"}>
        <CloseIcon type="primary" />
      </div>
      <h2 className={"text text_type_main-medium " + style.title}> ВХОД </h2>
      <EMail />
      <Password />
      <Button type="primary" size="medium">
        Войти
      </Button>
      <Link title={"Вы — новый пользователь?"} link={"Зарегистрироваться"} />
      <Link title={"Забыли пароль?"} link={"Восстановить пароль"} />
    </div>
  );
};
// ModalOverlay.propTypes = {
//   toggleVisible: PropTypes.func,
//   onClose: PropTypes.func,
// };

// export { Login };
