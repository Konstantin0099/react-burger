import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
//   import { useSelector } from "react-redux";
import * as React from "react";

export const InputName = ({type, placeholder, icon, value}) => {
  const [valueRegisterPage, setValueName] = React.useState("value");
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };
  React.useEffect(() => {
    setValueName(value);
    // inputRef.current.setAttribute("autocomplete", "off");
  }, []);

  return (
    <Input
      type={type}
      placeholder={placeholder}
      icon={icon}
      onChange={(e) => setValueName(e.target.value)}
      value={valueRegisterPage}
      name={"name"}
      error={false}
      ref={inputRef}
      onIconClick={onIconClick}
      errorText={"Ошибка"}
    //   size={"default"}
    />
  );
};
