import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
//   import { useSelector } from "react-redux";
import * as React from "react";

/** EMail поле меню для ввода адреса эл.почты  */
export const EMail = () => {
  const [value, setValue] = React.useState("bob@example.com");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  React.useEffect(() => {
    setValue("");
  }, []);
  return <EmailInput onChange={onChange} value={value} name={"email"} />;
};
