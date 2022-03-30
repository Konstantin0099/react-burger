import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
//   import { useSelector } from "react-redux";
import * as React from "react";

export const Password = () => {
  const [value, setValue] = React.useState("password");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  React.useEffect(() => {
    setValue("");
  }, []);
  return <PasswordInput onChange={onChange} value={value} name={"password"} />;
};
