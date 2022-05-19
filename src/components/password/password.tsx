// import PropTypes from "prop-types";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
// import * as React from "react";
import React, { FC, ChangeEvent } from "react";

// const setData = (data, name) => {
//   newData = { ...newData, [name]: data };
// };ChangeEvent<HTMLInputElement>)

export const Password: FC<{setData: (data: string, name: string) => void;}>  = ({ setData }) => {
  const [value, setValue] = React.useState("password");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setData(e.target.value, e.target.name);
  };
  React.useEffect(() => {
    setValue("");
  }, []);
  return <PasswordInput onChange={onChange} value={value} name={"password"} />;
};
