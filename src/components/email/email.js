import PropTypes from "prop-types";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import * as React from "react";

/** EMail поле меню для ввода адреса эл.почты  */
export const EMail = ({ setData, data = "bob@example.com" }) => {
  const [value, setValue] = React.useState("bob@example.com");
  const onChange = (e) => {
    setValue(e.target.value);
    setData(e.target.value, e.target.name);
  };
  React.useEffect(() => {
    setValue("");
  }, []);
  return (
    <EmailInput
      onChange={onChange}
      value={value}
      disabled={false}
      name={"email"}
    />
  );
};
EMail.propTypes = {
  setData: PropTypes.func,
  data: PropTypes.string,
};
