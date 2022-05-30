import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, ChangeEvent } from "react";
type TIcons =
  | "CurrencyIcon"
  | "BurgerIcon"
  | "LockIcon"
  | "DragIcon"
  | "DeleteIcon"
  | "ArrowUpIcon"
  | "ArrowDownIcon"
  | "MenuIcon"
  | "CloseIcon"
  | "CheckMarkIcon"
  | "ListIcon"
  | "ProfileIcon"
  | "EditIcon"
  | undefined;
export interface IInputName {
  type?: "text" | "email" | "password" | undefined;
  name: string;
  placeholder: string;
  icon?: TIcons;
  value: string | undefined;
  setData?: (data: string, name: string) => void;
  disabled?: boolean;
}

export const InputName: FC<IInputName> = ({ type, name, placeholder, icon, value = "", setData, disabled = false }) => {
  const [valueRegisterPage, setValueName] = React.useState<string>(value);
  const inputRef = React.useRef(null);
  const setValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValueName(e.target.value);
    setData && setData(e.target.value, e.target.name);
  };
  React.useEffect(() => {
    setValueName(value);
  }, [value]);

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
