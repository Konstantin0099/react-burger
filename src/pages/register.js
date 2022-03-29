// import PropTypes from "prop-types";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
//   import { useSelector } from "react-redux";
import * as React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export const RegisterPage = () => {
  const Name = () => {
    const [value, setValue] = React.useState("");
    const inputRef = React.useRef(null);
    const onIconClick = () => {
      setTimeout(() => inputRef.current.focus(), 0);
      alert("Icon Click Callback");
    };
    return (
      <Input
        type={"text"}
        placeholder={"имя"}
        onChange={(e) => setValue(e.target.value)}
        // icon={'CurrencyIcon'}
        value={value}
        name={"name"}
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        errorText={"Ошибка"}
        size={"default"}
      />
    );
  };

  /** EMail поле меню для ввода адреса эл.почты  */
  const EMail = () => {
    const [value, setValue] = React.useState("");
    const onChange = (e) => {
      setValue(e.target.value);
    };
    return (
      <EmailInput onChange={onChange} value={value} name={"email"}></EmailInput>
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
      <h2 className={"text text_type_main-medium " + style.title}>
        {" "}
        Регистрация{" "}
      </h2>
      <ul className={style.list}>
        <li className={style.field + " mb-4"}>
          <Name style={{ marginBotton: 24 }} />
        </li>
        <li className={style.field + " mb-4"}>
          <EMail />
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
          <MenuField title={"Уже зарегистрированы?"} link={"Войти"} />
        </li>
      </ul>
    </div>
  );
};
// ModalOverlay.propTypes = {
//   toggleVisible: PropTypes.func,
//   onClose: PropTypes.func,
// };
