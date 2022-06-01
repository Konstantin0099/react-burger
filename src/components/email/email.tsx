
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import  React, { ChangeEvent, FC } from "react";

type TEmail = {setData(data: string, name: string): void}
/** EMail поле меню для ввода адреса эл.почты  */
export const EMail: FC<TEmail> = ({ setData }) => {
  const [value, setValue] = React.useState<string>("bob@example.com");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setData(e.target.value, e.target.name);
  };
  React.useEffect(() => {
    setValue("");
  }, []);
  return <EmailInput onChange={onChange} value={value} name={"email"} />;
};

