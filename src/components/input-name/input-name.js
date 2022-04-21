import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import * as React from "react";

export const InputName = ({
  type,
  name,
  placeholder,
  icon,
  value = "",
  setData,
  disabled = false,
}) => {
  const [valueRegisterPage, setValueName] = React.useState(value);
  const inputRef = React.useRef(null);
  const setValue = (e) => {
    setValueName(e.target.value);
    setData(e.target.value, e.target.name);
  };
  React.useEffect(() => {
    setValueName(value);
  },);

  return (
    <Input
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      icon={icon}
      onChange={setValue}
      value={valueRegisterPage}
      name={name}
      error={false}
      ref={inputRef}
      errorText={"Ошибка"}
    />
  );
};

InputName.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  setData: PropTypes.func,
  disabled: PropTypes.bool,
};