import PropTypes from "prop-types";
import style from "./profile-form.module.css";
import { InputName } from "../input-name/input-name";

export const ProfileForm = ({user, pass}) => {
  console.log("ProfileForm",user, pass);
  // const [form, setValue] = useState({ name: "", email: '', password: '' });

  // const onChange = e => {
  //   setValue({ ...form, [e.target.name]: e.target.value });
  // };

  return (
    <ul className={style.list}>
    <li className={style.field + " mb-4"}>
      <InputName
        type={"text"}
        placeholder={"Имя"}
        icon={"EditIcon"}
        value={user.name}
      />
    </li>
    <li className={style.field + " mb-4"}>
      <InputName
        type={"text"}
        placeholder={"Логин"}
        icon={"EditIcon"}
        value={user.email}
      />
    </li>
    <li className={style.field + " mb-4"}>
      <InputName
        type={"password"}
        placeholder={"Пароль"}
        icon={"EditIcon"}
        value={pass.password}
      />
    </li>
  </ul>
  )
};