import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, ChangeEvent } from "react";
import { TSetData } from "../../services/types/types";

export const Password: FC<{ setData: TSetData }> = ({ setData }) => {
  const [value, setValue] = React.useState<string>("password");
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    setData(e.target.value, e.target.name);
  };
  React.useEffect(() => {
    setValue("");
  }, []);
  return <PasswordInput onChange={onChange} value={value} name={"password"} />;
};
