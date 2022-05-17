// import PropTypes from "prop-types";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import  React, { ChangeEvent, FC } from "react";

/** EMail поле меню для ввода адреса эл.почты  */
export const EMail: FC<{setData(data: string, name?: string): void}> = ({ setData }) => {
  const [value, setValue] = React.useState("bob@example.com");
  // const onChange = (e: ChangeEvent<HTMLInputElement>) => {setValue({ ...form, [e.target.name]: e.target.value });};
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setData(e.target.value, e.target.name);
  };
  React.useEffect(() => {
    setValue("");
  }, []);
  return <EmailInput onChange={onChange} value={value} name={"email"} />;
};
// EMail.propTypes = {
//   setData: PropTypes.func,
//   data: PropTypes.string,
// };
